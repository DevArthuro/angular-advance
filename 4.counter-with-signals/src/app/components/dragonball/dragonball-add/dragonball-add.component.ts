import { Component, signal, input, output, computed } from '@angular/core';
import { Character, FormCharacter } from '../../../interfaces/dragonball';

@Component({
  selector: 'app-dragonball-add',
  imports: [],
  templateUrl: './dragonball-add.component.html',
  styleUrl: './dragonball-add.component.scss',
})
export class DragonballAddComponent {
  isSelectedCharacter = input.required<boolean>();
  character = input.required<Character | null>();

  name = signal<string>('');
  power = signal<string>('');

  OnResetForm = output<void>();
  OnHandlerEditAndAdd = output<FormCharacter>();

  isDisabledForm = computed(
    
    () => this.name().length === 0 && Number(this.power()) === 0
  );

  reset() {
    this.OnResetForm.emit();
  }

  handlerApplyChanges() {
    console.log({
      name: this.name() ?? this.character()?.name,
      power: Number(this.power()) ?? this.character()?.power,
    });
    this.OnHandlerEditAndAdd.emit({
      name: this.name() || this.character()!.name,
      power: Number(this.power()) || this.character()!.power,
    });
  }
}
