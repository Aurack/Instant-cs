import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Picture} from "../entities/picture"

@Injectable({
  providedIn: 'root'
})
export class PictureService {

  private url: string = this.apiService.RessourceUrl + "pictures";

  constructor(public apiService: ApiService,
              private httpClient: HttpClient) {}

  public getAll(): Observable<Picture[]> {
    return this.httpClient.get<Picture[]>(this.url)
  }

  public getPictureById(id: number): Observable<Picture> {
    return this.httpClient.get<Picture>(this.url + "/" + id);
  }

  public addPicture(picture: FormData | undefined): Observable<Picture> {
    return this.httpClient.post<Picture>(this.url, picture);
  }

  public updatePicture(picture: Picture): Observable<Picture> {
    return this.httpClient.put<Picture>(this.url, picture);
  }

  public deletePicture(picture: Picture): void {
    this.httpClient.delete(this.url + "/" + picture.id);
  }
}
