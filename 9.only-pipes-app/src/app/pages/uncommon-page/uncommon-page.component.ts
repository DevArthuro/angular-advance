import { Component, signal } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { I18nPluralPipe, I18nSelectPipe, TitleCasePipe } from '@angular/common';

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
  imports: [CardComponent, I18nSelectPipe, I18nPluralPipe, TitleCasePipe],
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
    other: 'tenemos # clientes'
  })
}
