import {
  AfterViewInit,
  Component,
  computed,
  ElementRef,
  inject,
  viewChild,
} from '@angular/core';
import { ListComponent } from '../../components/gifs/list/list.component';
import { GifService } from '../../services/gifs.service';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-tranding-page',
  imports: [ListComponent],
  templateUrl: './tranding-page.component.html',
})
export default class TrandingPageComponent implements AfterViewInit {
  serviceGif = inject(GifService);
  serviceScroll = inject(ScrollService);

  elementOverScroll = viewChild<ElementRef>('parentSection');

  ngAfterViewInit(): void {
    const scrollDiv = this.elementOverScroll()?.nativeElement;
    if (!scrollDiv) return;
    scrollDiv.scrollTop = this.serviceScroll.trendingScrollState();
  }

  onScroll($event: Event) {
    const elementScroll = this.elementOverScroll()?.nativeElement;

    if (!elementScroll) return;

    const currentScroll = elementScroll.scrollTop;
    const clientHeight = elementScroll.clientHeight;
    const scrollHeight = elementScroll.scrollHeight;

    const isBottom = currentScroll + clientHeight >= scrollHeight;
    this.serviceScroll.setTrendingScrollState(currentScroll);

    if (isBottom) {
      this.serviceGif.loadGifs();
    }
  }
}
