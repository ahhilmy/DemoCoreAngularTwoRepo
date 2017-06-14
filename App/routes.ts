import { Routes } from '@angular/router'
import { EventListComponent } from './events/events-list.component'
import { EventDetailsComponent } from './events/event-details/event-details.component'
import { CreateEventComponent } from './events/create-event.component'
import { Error404Component } from './errors/404.component'
import { EventRouteActivator } from './events/event-details/event-route-activator.service'
import { EventListResolver } from './events/event-list-resolver.service'

export const appRoutes: Routes = [
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events', component: EventListComponent, resolve: { events: EventListResolver} },
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full' }
]

/*
important note: angular route cannot differentiate between
events/new
events/:id

hence the order is important...

placing in following order will make the new to be considered as id param
events/:id
events/new

*/

/*
There are two ways to add route guard.. can use either a function or service
events/:id route uses a service
events/new route uses a function - need to register as a provider in the module

canActivate will check whether it is possible to go in to the route - more suitable for things like authorization
canDeactivate will check whether it is possible to go out of a route - more suitable to check whether data are saved, etc.

*/