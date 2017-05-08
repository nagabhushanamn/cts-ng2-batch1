import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StoryFormComponent } from './story-form/story-form.component';
import { StoryListComponent } from './story-list/story-list.component';
import { StoryComponent } from './story/story.component';

import { StoryService } from './story.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StoryFormComponent,
    StoryListComponent,
    StoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [StoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
