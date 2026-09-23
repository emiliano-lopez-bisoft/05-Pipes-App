import { Component, signal } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { single } from 'rxjs';
import { I18nPluralPipe, I18nSelectPipe, JsonPipe, KeyValuePipe, SlicePipe } from '@angular/common';

const client1 = {
  name: 'Emiliano',
  gender: 'male',
  age: 22,
  address: 'Culiacán, México',
};

const client2 = {
  name: 'Alejandra',
  gender: 'female',
  age: 20,
  address: 'Guadalajara, México',
};

@Component({
  selector: 'app-uncommon-page',
  imports: [CardComponent, I18nSelectPipe, I18nPluralPipe, SlicePipe, JsonPipe, KeyValuePipe],
  templateUrl: './uncommon-page.component.html',
})
export default class UncommonPageComponent {
  // i18n Select
  client = signal(client1);

  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient() {
    if (this.client() === client1) {
      this.client.set(client2);
      return;
    }

    this.client.set(client1);
  }

  // i18n Plural
  clientsMap = signal({
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    other: 'tenemos # clientes esperando',
  });

  clients = signal(['Emiliano', 'Zoé', 'Verónica', 'Rafael', 'Alessandra', 'Jorge', 'Ximena']);

  deleteClient() {
    this.clients.update((prev) => prev.slice(1));
  }

  //KeyValue Pipe
  profile = {
    name: 'Luis',
    age: 21,
    address: 'Monterry, México',
  };
}
