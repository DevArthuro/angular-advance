import { afterNextRender, afterRender, Component, signal } from '@angular/core';
import { TitleComponent } from '../../components/title/title.component';

const log = (...message: string[]) => {
  console.log(
    `${message[0]} %c${message.slice(1).join(', ')}`,
    'color: #bada55'
  );
};

@Component({
  selector: 'home-page',
  imports: [TitleComponent],
  templateUrl: './home-page.component.html',
})
export default class HomePageComponent {

  traditionalProperty = ""
  signalPropery = signal("")

  constructor() {
    log('llamado del constructor');
    // Update out the context signal
    setTimeout(() => {
      this.signalPropery.set('juan');
    }, 3000);

    // Update out the context signal
    setTimeout(() => {
      this.traditionalProperty = 'pedro';
    }, 3000);
  }

  changeSignal() {
    this.signalPropery.set("Carlos")
  }

  changeTraditional() {
    this.traditionalProperty = "Mark"
  }

  ngOnInit() {
    log(
      'ngOnInit',
      "Runs once after Angular has initialized all the component's inputs."
    );
  }
  ngOnChanges() {
    log('ngOnChanges', "Runs every time the component's inputs have changed.");
  }
  ngDoCheck() {
    log('ngDoCheck', 'Runs every time this component is checked for changes.');
  }
  ngAfterContentInit() {
    log(
      'ngAfterContentInit',
      "Runs once after the component's content has been initialized."
    );
  }
  ngAfterContentChecked() {
    log(
      'ngAfterContentChecked',
      'Runs every time this component content has been checked for changes.'
    );
  }
  ngAfterViewInit() {
    log(
      'ngAfterViewInit',
      "Runs once after the component's view has been initialized."
    );
  }
  ngAfterViewChecked() {
    log(
      'ngAfterViewChecked',
      "Runs every time the component's view has been checked for changes."
    );
  }

  ngOnDestroy() {
    log('ngOnDestroy', 'Runs once before the component is destroyed.');
  }

  afterNextRenderEffect = afterNextRender(() => {
    log(
      'afterNextRender',
      'Runs once the next time that all components have been rendered to the DOM.'
    );
  })

  afterRenderEffect = afterRender(() => {
    log(
      'afterRender',
      '	Runs every time all components have been rendered to the DOM.'
    );
  })
}
