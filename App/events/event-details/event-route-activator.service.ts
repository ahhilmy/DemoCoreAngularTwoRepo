import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router'
import { Injectable } from '@angular/core'
import { EventService } from '../shared/event.service'

@Injectable()
export class EventRouteActivator implements CanActivate {
    constructor(private eventService: EventService, private router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot) {
        const eventExists = !!this.eventService.getEvent(+route.params['id'])

        if (!eventExists)
            this.router.navigate(['/404'])

        return eventExists
    }
}

/*

this service is the provider which can be configured to perticular route (AS ROUTE GUARD)
to check whether the route can be allowed for perticular instance..
this looks a good place of authorization and other things

*/