import {Injectable} from '@angular/core';
import {ApiService} from "./api.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Event} from "../entities/event";

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private url: string = this.apiService.RessourceUrl + "events";

  constructor(public apiService: ApiService,
              private httpClient: HttpClient) {}

  public getAll(): Observable<Event[]> {
    return this.httpClient.get<Event[]>(this.url)
  }

  public getEventById(id: number): Observable<Event> {
    return this.httpClient.get<Event>(this.url + "/" + id);
  }

  public getEventByName(name: string): Observable<Event> {
    return this.httpClient.get<Event>(this.url + "/name/" + name);
  }

  public addEvent(event: Event): Observable<Event> {
    return this.httpClient.post<Event>(this.url, event);
  }

  public addEventByNameAndUser(name: string, userId: number): Observable<Event> {
    return this.httpClient.post<Event>(this.url + "/create?name=" + name + "&userId=" + userId, null);
  }

  public updateEvent(event: Event): Observable<Event> {
    return this.httpClient.put<Event>(this.url, event);
  }

  public deleteEvent(eventId: number): void {
    this.httpClient.delete(this.url + "/" + eventId);
  }
}
