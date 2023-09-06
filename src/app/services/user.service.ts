import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {HttpClient} from "@angular/common/http";
import {User} from "../entities/user";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url: string = this.apiService.RessourceUrl + "users";

  constructor(public apiService: ApiService,
              private httpClient: HttpClient) {}

  public getAll(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.url)
  }

  public getUserById(id: number): Observable<User> {
    return this.httpClient.get<User>(this.url + "/" + id);
  }

  public getUserByName(name: string): Observable<User> {
    return this.httpClient.get<User>(this.url + "/name/" + name);
  }

  public addUser(name: string): Observable<User> {
    return this.httpClient.post<User>(this.url, name);
  }

  public updateUser(User: User): Observable<User> {
    return this.httpClient.put<User>(this.url, User);
  }

  public deleteUser(User: User): void {
    this.httpClient.delete(this.url + "/" + User.id);
  }
}
