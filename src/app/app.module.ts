import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatTabsModule,
    TimepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
