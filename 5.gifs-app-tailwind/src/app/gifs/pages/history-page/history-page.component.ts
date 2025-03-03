import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { GifService } from '../../services/gifs.service';
import { UpperCasePipe } from '@angular/common';
import { ListComponent } from "../../components/gifs/list/list.component";

@Component({
  selector: 'app-history-page',
  imports: [UpperCasePipe, ListComponent],
  templateUrl: './history-page.component.html',
})
export default class HistoryPageComponent {
  gifService = inject(GifService);

  queryParam = toSignal(
    inject(ActivatedRoute).params.pipe(map((params) => params['query'] ?? []))
  );

  gifsByKey = computed(() => this.gifService.getGifBySearchHistory(this.queryParam()));
}
