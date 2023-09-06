import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  get RessourceUrl() {
    return "http://localhost:8080/api/";
  }
}
