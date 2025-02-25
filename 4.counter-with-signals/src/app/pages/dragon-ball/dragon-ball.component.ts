import { Component, OnInit, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragon-ball',
  imports: [],
  templateUrl: './dragon-ball.component.html',
  styleUrl: './dragon-ball.component.scss'
})
export class DragonBallComponent implements OnInit{
  characters = signal<Character[]>([])

  ngOnInit(): void {
      this.characters.update((value) => [
        ...value,
        { id: 0, name: 'Gokù', power: 9000 },
        { id: 0, name: 'Vegueta', power: 8300 },
        { id: 0, name: 'Picolo', power: 3000 },
      ]);
  }
}
