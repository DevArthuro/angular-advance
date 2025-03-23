import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic-page.component.html',
})
export default class BasicPageComponent {
  nameLower = signal('carlos');
  nameUpper = signal('CARLOS');
  fullName = signal('cArLoS oRREgo');

  customDate = signal(new Date())


  tickingDateEffect = effect((onCleanUp) => {
      const interval = setInterval(() => {
        this.customDate.set(new Date())
        console.log("tick")
      }, 1000)

      onCleanUp(() => {
        clearInterval(interval)
      })
  })
}
