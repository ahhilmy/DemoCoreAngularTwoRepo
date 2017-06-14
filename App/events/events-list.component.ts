import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/event.service'
import { ToastrService } from '../common/toastr.service'
import { ActivatedRoute } from '@angular/router'

@Component({
    //selector: 'events-list',
    templateUrl: 'app/events/events-list.component.html' 
})
export class EventListComponent implements OnInit{
    //by implementing OnInit, it enforces that ngOnInit method is implemented - provides typescript compilation safety
    events: any
    constructor(private eventService: EventService, private toastr: ToastrService, private route: ActivatedRoute) {
        //it is bad idea to place long running processes in constructor
    }

    //life cycle hook - this is called when the component is loaded 
    ngOnInit() {
         //this is not needed since it is resolved and available in route 
        //this.eventService.getEvents().subscribe(events => { this.events = events })

        this.events = this.route.snapshot.data['events']
    }

    eventObj = {
        id: 1,
        name: 'Angular Pie',
        date: '9/26/2016',
        time: '10:00 am',
        price: 599.99,
        imageUrl: '/app/assets/images/angularconnect-shield.png',
        location: {
            address: '1057 DT',
            city: 'London',
            country: 'England'
        }
    }

    handleEventClicked(data) {
        this.toastr.success(data)
    }
}