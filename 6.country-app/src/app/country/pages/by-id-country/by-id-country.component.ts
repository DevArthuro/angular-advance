import { Component, inject, effect } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, of } from 'rxjs';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { CountryService } from '../../services/contriesRest.service';
import { Country } from '../../interfaces/country.interface';
import { NotFoundComponent } from '../../../shared/components/not-found/not-found.component';
import { CountryInformationComponent } from "./country-information/country-information.component";

@Component({
  selector: 'country-by-id',
  imports: [NotFoundComponent, CountryInformationComponent],
  templateUrl: './by-id-country.component.html'
})
export default class ByIdCountryComponent {
  id = inject(ActivatedRoute).snapshot.params["id"]
  countryService = inject(CountryService);

  callCountryByCode = rxResource({
    request: () => ({id: this.id }),
    loader: () => {
      return this.countryService.getCountyByQuery(this.id);
    }
  })
}
