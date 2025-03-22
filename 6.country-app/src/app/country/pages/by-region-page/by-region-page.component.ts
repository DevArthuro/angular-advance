import { Component, inject, resource } from '@angular/core';
import { TableComponent } from '../../components/table/tableList.component';
import { Region } from '../../interfaces/region.interface';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { map, of } from 'rxjs';
import { CountryService } from '../../services/contriesRest.service';

@Component({
  selector: 'country-by-region-page',
  imports: [TableComponent, RouterLink, RouterLinkActive],
  templateUrl: './by-region-page.component.html',
})
export default class ByRegionPageComponent {
  region = toSignal<Region>(
    inject(ActivatedRoute).params.pipe(map((params) => params['region']))
  );

  searchRegionsService = inject(CountryService);

  public regions: Region[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
    'Antarctic',
  ];

  callServiceCountryByRegion = rxResource({
    request: () => {
      const currentRegion = this.region();
      return { region: currentRegion };
    },
    loader: () => {
      const currentRegion = this.region();
      if (!currentRegion || currentRegion.length === 0) {
        return of([]);
      }
      return this.searchRegionsService.getCountriesByRegion(currentRegion);
    },
  });

  onSearch(value: string) {
    console.log({ value });
  }
}
