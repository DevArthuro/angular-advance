import { Component, signal } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import {
  AsyncPipe,
  I18nPluralPipe,
  I18nSelectPipe,
  JsonPipe,
  KeyValuePipe,
  SlicePipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { interval, map, tap } from 'rxjs';

const cliente1 = {
  name: 'Fernando',
  gender: 'male',
  age: 39,
  address: 'Ottawa, Canadá',
};

const cliente2 = {
  name: 'Melissa',
  gender: 'female',
  age: 39,
  address: 'Toronto, Canadá',
};

@Component({
  selector: 'app-uncommon-page',
  imports: [
    CardComponent,
    I18nSelectPipe,
    I18nPluralPipe,
    TitleCasePipe,
    SlicePipe,
    JsonPipe,
    UpperCasePipe,
    KeyValuePipe,
    AsyncPipe,
  ],
  templateUrl: './uncommon-page.component.html',
})
export default class UncommonPageComponent {
  client = signal(cliente1);

  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient() {
    if (this.client() === cliente1) {
      this.client.set(cliente2);
      return;
    }
    this.client.set(cliente1);
  }

  clients = signal([
    'Carlos',
    'Juan',
    'Pablo',
    'Pedro',
    'persona1',
    'persona2',
    'persona3',
    'persona4',
    'persona5',
  ]);

  deleteClient() {
    this.clients.update((clients) => {
      const newArray = [...clients];
      newArray.pop();
      return newArray;
    });
  }

  clientsMap = signal({
    '=0': 'no tenemos clientes',
    '=1': 'tenemos un cliente',
    '=2': 'tenemos dos clientes',
    other: 'tenemos # clientes',
  });

  noramlization = signal({
    undefined: 'No tenemos clientes',
  });

  profile = {
    name: 'carlos',
    age: 20,
    bornDate: new Date('02/08/2004').toISOString(),
  };

  promiseValue: Promise<string> = new Promise((resolver, rejected) => {
    setTimeout(() => {
      resolver('Tenemos está promesa');
    }, 3000);
  });

  promiseValueRejected: Promise<string> = new Promise((resolver, rejected) => {
    setTimeout(() => {
      rejected('Tenemos está promesa');
    }, 3000);
  });

  myObservable = interval(2000).pipe(
    map((value) => value +1),
    tap((value) => {
      console.log(`tap: ${value}`);
    })
  );
}
