import {
  Component,
  computed,
  inject,
  model,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { DragonballListComponent } from '../../components/dragonball/dragonball-list/dragonball-list.component';
import { Character, FormCharacter } from '../../interfaces/dragonball';
import { DragonballAddComponent } from '../../components/dragonball/dragonball-add/dragonball-add.component';
import { DragonballService } from '../../services/dragonball/dragonball-service.service';

@Component({
  selector: 'app-dragon-ball',
  imports: [DragonballListComponent, DragonballAddComponent],
  templateUrl: './dragon-ball.component.html',
  styleUrl: './dragon-ball.component.scss',
})
export class DragonBallComponent {
  dragonBallService = inject(DragonballService);
}
