import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise'

@Injectable()
export class StoryService {

  private apiUrl: string = "http://0.0.0.0:3000/api/stories";

  constructor(private http: Http) { }

  getAllStories() {
    return this.http.get(this.apiUrl).toPromise();
  }
  postNewStory(story) {
    story.createdOn = Date.now();
    return this.http.post(this.apiUrl, story).toPromise();
  }

}
