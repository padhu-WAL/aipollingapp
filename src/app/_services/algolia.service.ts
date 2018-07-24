import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable()
export class AlgoliaService {
  private params = new HttpParams().set('tags', 'story');
  constructor(private http: HttpClient) { }

  getNewStories() {
    return this.http.get('https://hn.algolia.com/api/v1/search_by_date', { params: this.params} );
  }

}
