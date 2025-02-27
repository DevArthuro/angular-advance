import { Component, input, output } from '@angular/core';
import { Character } from '../../../interfaces/dragonball';

@Component({
  selector: 'app-dragonball-list',
  templateUrl: './dragonball-list.component.html',
  styleUrl: './dragonball-list.component.scss'
})
export class DragonballListComponent {
  characters = input.required<Character[]>();

  OnEditCharacter = output<number>()
  
  editCharacter(id: number) {
    this.OnEditCharacter.emit(id);
  }

}
