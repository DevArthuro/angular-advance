import { Component, input } from '@angular/core';
import { Character } from '../../../interfaces/dragonball';

@Component({
  selector: 'app-dragonball-list',
  templateUrl: './dragonball-list.component.html',
  styleUrl: './dragonball-list.component.scss'
})
export class DragonballListComponent {
  characters = input.required<Character[]>();
  
  editCharacter(id: number) {
    console.log(id);
  }

}
