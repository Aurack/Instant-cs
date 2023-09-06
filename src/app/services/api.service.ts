import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  get RessourceUrl() {
    return "https://instant-ss-production.up.railway.app/api/";
    //return "localhost:8080/api/";
  }
}
