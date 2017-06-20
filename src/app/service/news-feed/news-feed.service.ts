import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class NewsFeedService {

  constructor(private http: Http) { }
    
    getNewsFeed(): Observable<any>{
        return this.http.get('../assets/json/newsFeed.json').map(
        response => {
            return response.json();
        });
    }

}
