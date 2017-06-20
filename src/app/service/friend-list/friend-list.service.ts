import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class FriendListService {

  constructor(private http: Http) { }
    
    getFriendList(): Observable<any>{
        return this.http.get('../assets/json/friendList.json').map(
        response => {
            return response.json();
        });
    }

}
