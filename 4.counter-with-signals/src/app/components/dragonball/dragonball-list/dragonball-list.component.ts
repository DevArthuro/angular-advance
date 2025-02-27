import { Component, inject, input, output } from '@angular/core';
import { Character } from '../../../interfaces/dragonball';
import { DragonballService } from '../../../services/dragonball/dragonball-service.service';

@Component({
  selector: 'app-dragonball-list',
  templateUrl: './dragonball-list.component.html',
  styleUrl: './dragonball-list.component.scss'
})
export class DragonballListComponent {
  dragonBallService = inject(DragonballService)
  
  editCharacter(id: number) {
    this.dragonBallService.activeSelect(id);
  }

}
