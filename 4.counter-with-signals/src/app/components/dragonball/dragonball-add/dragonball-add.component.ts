import {
  Component,
  signal,
  input,
  output,
  computed,
  inject,
} from '@angular/core';
import { Character } from '../../../interfaces/dragonball';
import { DragonballService } from '../../../services/dragonball/dragonball-service.service';

@Component({
  selector: 'app-dragonball-add',
  imports: [],
  templateUrl: './dragonball-add.component.html',
  styleUrl: './dragonball-add.component.scss',
})
export class DragonballAddComponent {
  dragonBallService = inject(DragonballService);

  name = signal<string>('');
  power = signal<string>('');

  isDisabledForm = computed(
    () => this.name().length === 0 && Number(this.power()) === 0
  );

  reset() {
    this.dragonBallService.resetSelect();
  }

  handlerApplyChanges() {
    this.dragonBallService.handlerApplyChanges({
      name: this.name() || this.dragonBallService.character()!.name,
      power:
        Number(this.power()) ||
        Number(this.dragonBallService.character()?.power),
    });
  }
}
