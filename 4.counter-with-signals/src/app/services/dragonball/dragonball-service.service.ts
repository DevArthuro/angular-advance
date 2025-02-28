import { computed, effect, Injectable, signal } from '@angular/core';
import { Character, FormCharacter } from '../../interfaces/dragonball';

export enum KEYS_LOCALSTORAGE {
  LIST_CHARACTERS = "characters"
}

function loadFromLocalStorage(): Character[] {
  const characters = localStorage.getItem(KEYS_LOCALSTORAGE.LIST_CHARACTERS);

  if (characters) {
    return JSON.parse(characters);
  }

  return [];
}

@Injectable({
  providedIn: 'root',
})
export class DragonballService {
  characters = signal<Character[]>(loadFromLocalStorage());

  isSelectedCharacter = computed<boolean>(() =>
    this.characters().some((character) => character.selected)
  );

  character = computed<Character | null>(
    () => this.characters().find((character) => character.selected) ?? null
  );

  saveToLocalStorage = effect(() => {
    localStorage.setItem(
      KEYS_LOCALSTORAGE.LIST_CHARACTERS,
      JSON.stringify(this.characters())
    );
  });

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
