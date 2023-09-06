import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Like} from "../entities/like";
import {Picture} from "../entities/picture";

@Injectable({
  providedIn: 'root'
})
export class LikeService {

  private url: string = this.apiService.RessourceUrl + "like";

  constructor(public apiService: ApiService,
              private httpClient: HttpClient) {}

  public getAll(): Observable<Like[]> {
    return this.httpClient.get<Like[]>(this.url)
  }

  public getLikesById(id: number): Observable<Like> {
    return this.httpClient.get<Like>(this.url + "/" + id);
  }

  public getPicturesByUserId(userId: number): Observable<Picture[]> {
    return this.httpClient.get<Picture[]>(this.url + "/user/" + userId);
  }

  public getLikesCountByPictureId(pictureId: number): Observable<number> {
    return this.httpClient.get<number>(this.url + "/picture/" + pictureId);
  }

  public hasLiked(userId: number, pictureId: number) : Observable<boolean> {
    return this.httpClient.get<boolean>(this.url + "/liked?user=" + userId + "&picture=" + pictureId);
  }

  public addLikes(like: Like): Observable<Like> {
    return this.httpClient.post<Like>(this.url, like);
  }

  public addLikesParams(userId: number, pictureId: number) {
    return this.httpClient.post<Like>(this.url + "/params?userId=" + userId + "&pictureId=" + pictureId, null);
  }

  public updateLikes(like: Like): Observable<Like> {
    return this.httpClient.put<Like>(this.url, like);
  }

  public deleteLikes(like: Like): void {
    this.httpClient.delete(this.url + "/" + like.id);
  }
}
