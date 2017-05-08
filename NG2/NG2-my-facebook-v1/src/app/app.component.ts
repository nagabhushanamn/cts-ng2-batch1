import { Component } from '@angular/core';
import { StoryService } from './story.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'my-facebook';

  isStoryFormVisible = false;

  stories: Array<any> = [];

  constructor(private storyService: StoryService) { }

  ngOnInit() {
    let promise = this.storyService.getAllStories()
    promise.then((resp) => {
      this.stories = resp.json();
    });
  }

  addNewStory(event) {
    this.storyService.postNewStory(event.story)
      .then((story) => {
        this.stories.push(event.story);
        this.toggleStoryForm();
      })

  }

  toggleStoryForm() {
    this.isStoryFormVisible = !this.isStoryFormVisible;
  }

}
