import {
  Component,
  effect,
  ElementRef,
  signal,
  viewChild,
} from '@angular/core';
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import { environment } from '../../../environments/environment';
import { DecimalPipe, JsonPipe } from '@angular/common';

mapboxgl.accessToken = environment.MAPBOX_KEY;
@Component({
  selector: 'app-fullscreen-map-page',
  imports: [DecimalPipe,  JsonPipe],
  templateUrl: './fullscreen-map-page.component.html',
  styles: `
    div {
      width: 100vw;
      height: calc(100vh - 64px)
    }

    #controls {
      background-color: white;
      padding: 10px;
      border-radius: 5px;
      position: fixed;
      bottom: 25px;
      right: 20px;
      z-index: 9999;
      box-shadow: 0 0 10px 0 rgba(0,0,0,0.1);
      border: 1px solid #e2e8f0;
      width: 250px;
    }
  `,
})
export default class FullscreenMapPageComponent {
  element = viewChild<ElementRef>('map');
  map = signal<mapboxgl.Map | null>(null);
  zoom = signal(8);
  coordinates = signal({
    lng: -74.5,
    lat: 40
  })

  zoomListener = effect(() => {
    if (!this.map()) return;
    this.map()!.setZoom(this.zoom());
  });

  async ngAfterViewInit() {
    if (!this.element()?.nativeElement) return;
    const { lng, lat } = this.coordinates();
    const map = new mapboxgl.Map({
      container: this.element()?.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: 9,
    });

    this.onListenerMap(map);
  }

  onListenerMap(map: mapboxgl.Map) {
    map.on('zoomend', (event) => {
      const newZoom = event.target.getZoom();
      this.zoom.set(newZoom);
    });

    map.on('moveend', () => {
      const center = map.getCenter()
      this.coordinates.set({
        lat: center.lat,
        lng: center.lng
      })
    })

    map.on('load', () => {
      console.log("loading")
    })

    map.addControl(new mapboxgl.FullscreenControl())
    map.addControl(new mapboxgl.NavigationControl())
    map.addControl(new mapboxgl.ScaleControl())

    this.map.set(map);
  }
}
