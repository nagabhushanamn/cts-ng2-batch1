import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HitButtonComponent } from './hit-button/hit-button.component';
import { HitCountDisplayComponent } from './hit-count-display/hit-count-display.component';

@NgModule({
  declarations: [
    AppComponent,
    HitButtonComponent,
    HitCountDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
