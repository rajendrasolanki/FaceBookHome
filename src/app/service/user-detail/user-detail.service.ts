import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class UserDetailService {

    constructor(private http: Http) { }
    
    getUserDetail(): Observable<any>{
        return this.http.get('../assets/json/user.json').map(
        response => {
            return response.json();
        });
    }

}
