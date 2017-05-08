import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-story-form',
  templateUrl: './story-form.component.html',
  styleUrls: ['./story-form.component.css']
})
export class StoryFormComponent implements OnInit {

  @Output()
  story = new EventEmitter();

  newStory: any = { name: '', message: '' };

  constructor() { }

  ngOnInit() {
  }

  handleSubmit(event) {
    this.story.emit({ story: Object.assign({}, this.newStory, {createdOn:Date.now()}) });
  }

}
