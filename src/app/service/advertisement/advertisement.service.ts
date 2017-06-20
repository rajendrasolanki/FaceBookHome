import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class AdvertisementService {

  constructor(private http: Http) { }
    
    getAdvertisement(): Observable<any>{
        return this.http.get('../assets/json/advertisement.json').map(
        response => {
            return response.json();
        });
    }

}
