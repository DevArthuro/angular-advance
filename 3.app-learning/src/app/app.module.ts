import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { ValuesComponent } from './values/values.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    ButtonsComponent,
    ValuesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
