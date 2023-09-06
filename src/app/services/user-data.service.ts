import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  userId: number | undefined = 0;
  userName: string = "";

  constructor() { }
}
