import {Component, OnInit} from '@angular/core';
import {EventService} from "../services/event.service";
import {Event} from "../entities/event";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit{
  events: Event[] = [];
  isAvailable: boolean = false;
  eventName: string = "";
  user: number | undefined = undefined;

  constructor(public eventService: EventService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.user = params['userId'];
      console.log(params)
    });
    this.eventService.getAll().subscribe(e => {
      this.events = e;
      this.isAvailable = true;
    });
  }

  reroute(eventId: number|undefined) {
    this.router.navigate(['/home'], {queryParams: {eventId: eventId, userId: this.user as number}});
  }

  addEvent() {
    console.log(this.eventName, this.user)
    this.eventService.addEventByNameAndUser(this.eventName, this.user as number).subscribe();
  }

  deleteEvent(eventId: number | undefined){
    this.eventService.deleteEvent(eventId as number);
  }
}
