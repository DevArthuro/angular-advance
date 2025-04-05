import { Component, inject, effect, linkedSignal, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';
import { filter, map, switchMap, tap } from 'rxjs';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-country-page',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './country-page.component.html',
})
export default class CountryPageComponent {
  private fb = inject(FormBuilder);
  private countryService = inject(CountryService);

  regions = linkedSignal(() => this.countryService.regions);
  countries = signal<Country[]>([]);
  borders = signal<Country[]>([]);

  formCountry = this.fb.group({
    region: ['', Validators.required],
    country: ['', Validators.required],
    border: ['', Validators.required],
  });

  onChangeForm = effect((onCleanUp) => {
    const regionSuscribe = this.onChangeRegion();
    const countriesSuscribe = this.onChangeCountry();

    onCleanUp(() => {
      regionSuscribe.unsubscribe();
      countriesSuscribe.unsubscribe();
    });
  });

  private onChangeRegion() {
    return this.formCountry
      .get('region')!
      .valueChanges.pipe(
        tap(() => {
          this.formCountry.get('country')!.setValue('');
          this.formCountry.get('border')!.setValue('');
        }),
        tap(() => {
          this.countries.set([]);
          this.borders.set([]);
        }),
        switchMap((region) =>
          this.countryService.getCountriesByRegion(region ?? '')
        )
      )
      .subscribe((value) => {
        this.countries.set(value);
      });
  }

  private onChangeCountry() {
    return this.formCountry
      .get('country')!
      .valueChanges.pipe(
        tap(() => {
          this.formCountry.get('border')!.setValue('');
          this.borders.set([]);
        }),
        filter((value) => value!.length > 0),
        switchMap((countryCode) =>
          this.countryService.getCountryByAlphaCode(countryCode ?? '')
        ),
        switchMap((country) =>
          this.countryService.getBorderCountriesByCodes(country.borders)
        )
      )
      .subscribe((value) => {
        this.borders.set(value);
      });
  }
}
