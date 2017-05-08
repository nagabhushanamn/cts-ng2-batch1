import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.css']
})
export class StoryListComponent implements OnInit {

  @Input()
  stories: Array<any>;

  constructor() { }

  ngOnInit() {
  }


 
}
