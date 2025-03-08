import { Component, inject, effect } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, of } from 'rxjs';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'country-by-id',
  imports: [],
  templateUrl: './by-id-country.component.html'
})
export default class ByIdCountryComponent {
  id = toSignal(inject(ActivatedRoute).params.pipe<string>(map((params) => params["id"] ?? "")))

  callCountryByCode = rxResource({
    request: () => ({id: this.id()}),
    loader: () => {
      alert(this.id())
      return of("")
    }
  })
}
