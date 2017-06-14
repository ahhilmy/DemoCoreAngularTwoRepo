"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var events_app_component_1 = require("./events-app.component");
var events_list_component_1 = require("./events/events-list.component");
var event_thumbnail_component_1 = require("./events/event-thumbnail.component");
var navbar_component_1 = require("./Nav/navbar.component");
var event_service_1 = require("./events/shared/event.service");
var toastr_service_1 = require("./common/toastr.service");
var event_details_component_1 = require("./events/event-details/event-details.component");
var routes_1 = require("./routes");
var create_event_component_1 = require("./events/create-event.component");
var _404_component_1 = require("./errors/404.component");
var event_route_activator_service_1 = require("./events/event-details/event-route-activator.service");
var event_list_resolver_service_1 = require("./events/event-list-resolver.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            router_1.RouterModule.forRoot(routes_1.appRoutes)
        ],
        declarations: [
            events_app_component_1.EventsAppComponent,
            events_list_component_1.EventListComponent,
            create_event_component_1.CreateEventComponent,
            event_thumbnail_component_1.EventThumbnailComponent,
            event_details_component_1.EventDetailsComponent,
            navbar_component_1.NavBarComponent,
            _404_component_1.Error404Component
        ],
        providers: [
            event_service_1.EventService,
            toastr_service_1.ToastrService,
            event_route_activator_service_1.EventRouteActivator,
            {
                provide: 'canDeactivateCreateEvent',
                useValue: checkDirtyState
            },
            event_list_resolver_service_1.EventListResolver
        ],
        bootstrap: [events_app_component_1.EventsAppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//very first parameter passed into the can deactivate function is component itself 
function checkDirtyState(component) {
    if (component.isDirty) {
        return window.confirm('You have not saved this event, do you really want to cancel?');
    }
    return true;
}
/*
providers can be defined as short hand approach and long hand approach
EventService - is short hand approach
canDeactivateCreateEvent - is done as long hand approach
*/ 
//# sourceMappingURL=app.module.js.map