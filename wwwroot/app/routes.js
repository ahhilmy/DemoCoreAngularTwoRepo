"use strict";
var events_list_component_1 = require("./events/events-list.component");
var event_details_component_1 = require("./events/event-details/event-details.component");
var create_event_component_1 = require("./events/create-event.component");
var _404_component_1 = require("./errors/404.component");
var event_route_activator_service_1 = require("./events/event-details/event-route-activator.service");
var event_list_resolver_service_1 = require("./events/event-list-resolver.service");
exports.appRoutes = [
    { path: 'events/new', component: create_event_component_1.CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events', component: events_list_component_1.EventListComponent, resolve: { events: event_list_resolver_service_1.EventListResolver } },
    { path: 'events/:id', component: event_details_component_1.EventDetailsComponent, canActivate: [event_route_activator_service_1.EventRouteActivator] },
    { path: '404', component: _404_component_1.Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full' }
];
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
//# sourceMappingURL=routes.js.map