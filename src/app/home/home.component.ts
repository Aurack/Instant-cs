import {Component, OnInit} from '@angular/core';
import {PictureService} from "../services/picture.service";
import {Picture} from "../entities/picture";
import {LikeService} from "../services/like.service";
import {UserService} from "../services/user.service";
import {UserDataService} from "../services/user-data.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pictures: Picture[] = [];
  isAvailable: boolean = false;
  formData: FormData = new FormData();
  user: number | undefined = undefined;
  file: File | null = null;
  picturesDecoded: {id: number | undefined, url: string}[] = [];
  eventId: number | undefined = undefined;

  constructor(public pictureService: PictureService,
              public likesService: LikeService,
              public userDataService: UserDataService,
              public userService: UserService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.user = params['userId'];
      this.eventId = params['eventId'];
      this.pictureService.getPicturesByEventId(this.eventId).subscribe({
        next: p => {
          this.pictures = p.sort((p1, p2) => p1.date < p2.date ? 1 : -1);
          p.forEach(image => {
            const blob = this.dataURItoBlob(image.pictureUrl);
            const imageUrl = URL.createObjectURL(blob);
            this.picturesDecoded.push({id: image.id, url: imageUrl});
          })
          this.isAvailable = true;
        }
      });
    });
  }

  dataURItoBlob(dataURI: string) {
    const parts = dataURI.split(';base64,');
    const mimeType = parts[0].split(':')[1];
    const byteString = atob(parts[0]);

    const arrayBuffer = new ArrayBuffer(byteString.length);
    const byteArray = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      byteArray[i] = byteString.charCodeAt(i);
    }

    return new Blob([arrayBuffer], { type: mimeType });
  }

  like(pictureId: number | undefined) {
    this.likesService.addLikesParams(this.user as number, pictureId as number).subscribe()
  }

  share(pictureId: number | undefined) {

  }

  download(pictureId: number | undefined) {
    const url = this.picturesDecoded.find(p => p.id == pictureId)?.url as string;
    const a = document.createElement('a');
    a.href = url;
    a.download = 'image.png';
    a.click();
    URL.revokeObjectURL(url);
  }

  onFileChange(event: any) {
    this.file = event.target.files[0];
  }

  addPicture() {
    if (this.file != null) {
      this.formData.append('image', this.file);
      this.formData.append('eventId', (this.eventId as number).toString());
      this.pictureService.addPicture(this.formData).subscribe(() => window.location.reload())
    }
  }
}


