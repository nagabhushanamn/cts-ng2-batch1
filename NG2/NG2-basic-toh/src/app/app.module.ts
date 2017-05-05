import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero/hero-detail.component';
import { HeroService } from './hero.service';

@NgModule({
  imports:      [ BrowserModule,FormsModule ],
  declarations: [AppComponent, HeroDetailComponent],
  providers:[HeroService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
