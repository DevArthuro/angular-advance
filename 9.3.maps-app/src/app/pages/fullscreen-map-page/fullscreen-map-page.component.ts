import { Component, ElementRef, viewChild } from '@angular/core';
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import { environment } from '../../../environments/environment';

mapboxgl.accessToken = environment.MAPBOX_KEY;
@Component({
  selector: 'app-fullscreen-map-page',
  imports: [],
  templateUrl: './fullscreen-map-page.component.html',
  styles: `
    div {
      width: 100vw;
      height: calc(100vh - 64px)
    }
  `
})
export default class FullscreenMapPageComponent {
  
  element = viewChild<ElementRef>("map");
  
  async ngAfterViewInit() {

    if (!this.element()?.nativeElement) return 

    const map = new mapboxgl.Map({
      container: this.element()?.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-74.5, 40],
      zoom: 9,
    });
  }
}
