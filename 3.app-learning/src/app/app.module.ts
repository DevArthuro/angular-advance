import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { ValuesComponent } from './values/values.component';
import { UserFormComponent } from './user-form/user-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FieldsFormComponent } from './fields-form/fields-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    ButtonsComponent,
    ValuesComponent,
    UserFormComponent,
    FieldsFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
