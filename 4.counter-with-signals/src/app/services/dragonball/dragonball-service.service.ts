import { computed, Injectable, signal } from '@angular/core';
import { Character, FormCharacter } from '../../interfaces/dragonball';

@Injectable({
  providedIn: 'root',
})
export class DragonballService {
  characters = signal<Character[]>([
    { id: 0, name: 'Gokú', power: 9000, selected: false },
    { id: 1, name: 'Vegueta', power: 8300, selected: false },
    { id: 2, name: 'Picolo', power: 3000, selected: false },
  ]);

  isSelectedCharacter = computed<boolean>(() =>
    this.characters().some((character) => character.selected)
  );

  character = computed<Character | null>(
    () =>
      this
        .characters()
        .find((character) => character.selected) ?? null
  );

  constructor() {}

  private addCharacter({ name, power }: FormCharacter) {
    this.characters.update((character) => [
      ...character,
      {
        id: character.length + 1,
        name,
        power,
        selected: false,
      },
    ]);
  }

  private editCharacter({ name, power }: FormCharacter) {
    const findCharacter = this.characters().find(
      (character) => character.selected
    )!;
    this.characters.update((prev) =>
      prev.map((character) =>
        character.id === findCharacter.id
          ? { ...character, name, power }
          : character
      )
    );
  }

  handlerApplyChanges({ name, power }: FormCharacter) {
    if (this.isSelectedCharacter()) {
      this.editCharacter({ name, power });
      return;
    }

    this.addCharacter({ name, power });
  }

  resetSelect() {
    this.characters.update((prevCharacter) =>
      prevCharacter.map((character) => ({ ...character, selected: false }))
    );
  }

  activeSelect(id: number) {
    this.characters.update((prevCharacter) =>
      prevCharacter.map((character) =>
        character.id === id
          ? { ...character, selected: true }
          : { ...character, selected: false }
      )
    );
  }
}
