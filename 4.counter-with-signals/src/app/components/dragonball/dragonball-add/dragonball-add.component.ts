import { Component, signal, input } from '@angular/core';
import { Character } from '../../../interfaces/dragonball';

@Component({
  selector: 'app-dragonball-add',
  imports: [],
  templateUrl: './dragonball-add.component.html',
  styleUrl: './dragonball-add.component.scss'
})
export class DragonballAddComponent {
  isSelectedCharacter = input.required<boolean>();
  character = input.required<Character | null>();
  
  name = signal<string>('');
  power = signal<string>('');
  
  reset() {
    
  }
  
  handlerApplyChanges() {
  
  }
}
