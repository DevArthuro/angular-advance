import { Component, ElementRef, signal, viewChild } from '@angular/core';
import mapboxgl, { Map } from 'mapbox-gl';
import { environment } from '../../../environments/environment';
import { JsonPipe } from '@angular/common';

mapboxgl.accessToken = environment.MAPBOX_KEY;

@Component({
  selector: 'app-markers-page',
  imports: [JsonPipe],
  templateUrl: './markers-page.component.html',
})
export default class MarkersPageComponent {
  element = viewChild<ElementRef>('map');
  map = signal<mapboxgl.Map | null>(null);
  coordinates = signal({
    lng: -75.694594,
    lat: 4.813847,
  });
  marker = signal<{ id: string; marker: mapboxgl.Marker }[]>([]);

  async ngAfterViewInit() {
    if (!this.element()?.nativeElement) return;
    await new Promise((resolver) => {
      setTimeout(() => {
        resolver("finished")
      }, 80)
    })
    const { lng, lat } = this.coordinates();
    const map = new mapboxgl.Map({
      container: this.element()?.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: 14,
    });

    const marker = new mapboxgl.Marker({ draggable: true, color: '#000' })
      .setLngLat([lng, lat])
      .addTo(map);

    marker.on('dragend', (event) => {
      console.log(event);
    });

    this.onListenerMap(map);
  }

  onListenerMap(map: Map) {
    map.on('click', (event) => this.mapClickMarker(event));

    this.map.set(map);
    throw new Error('Method not implemented.');
  }

  mapClickMarker(event: mapboxgl.MapMouseEvent) {
    if (!this.map()) return;

    const map = this.map()!;

    const { lng, lat } = event.lngLat;

    const color = '#xxxxxx'.replace(/x/g, (y) =>
      ((Math.random() * 16) | 0).toString(16)
    );

    const marker = new mapboxgl.Marker({ color })
      .setLngLat({ lng, lat })
      .addTo(map);

    this.marker.update((prev) => [
      ...prev,
      { id: `${Math.random() * 12345}`, marker },
    ]);
  }
}
