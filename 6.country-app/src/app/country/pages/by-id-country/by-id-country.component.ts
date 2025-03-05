import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'country-by-id',
  imports: [],
  templateUrl: './by-id-country.component.html'
})
export default class ByIdCountryComponent {
  id = toSignal(inject(ActivatedRoute).params.pipe<string>(map((params) => params["id"] ?? "")))
}
