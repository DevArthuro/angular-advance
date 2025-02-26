import { Component, computed, model, OnInit, signal, WritableSignal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
  selected: boolean;
}

@Component({
  selector: 'app-dragon-ball',
  imports: [],
  templateUrl: './dragon-ball.component.html',
  styleUrl: './dragon-ball.component.scss',
})
export class DragonBallComponent implements OnInit {
  characters = signal<Character[]>([]);

  isSelectedCharacter = computed<boolean>(() =>
    this.characters().some((character) => character.selected)
  );

  character = computed<Character | null>(
    () => this.characters().find((character) => character.selected) ?? null
  );

  ngOnInit(): void {
    this.characters.update((value) => [
      ...value,
      { id: 0, name: 'Gokú', power: 9000, selected: false },
      { id: 1, name: 'Vegueta', power: 8300, selected: false },
      { id: 2, name: 'Picolo', power: 3000, selected: false },
    ]);
  }

  editCharacter(id: number) {
    this.characters.update((prevCharacter) =>
      prevCharacter.map((character) =>
        character.id === id
          ? { ...character, selected: true }
          : { ...character, selected: false }
      )
    );
  }

  reset() {
    this.characters.update((prevCharacter) =>
      prevCharacter.map((character) => ({ ...character, selected: false }))
    );
  }

}
