"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var event_service_1 = require("./shared/event.service");
var toastr_service_1 = require("../common/toastr.service");
var router_1 = require("@angular/router");
var EventListComponent = (function () {
    function EventListComponent(eventService, toastr, route) {
        this.eventService = eventService;
        this.toastr = toastr;
        this.route = route;
        this.eventObj = {
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
        };
        //it is bad idea to place long running processes in constructor
    }
    //life cycle hook - this is called when the component is loaded 
    EventListComponent.prototype.ngOnInit = function () {
        //this is not needed since it is resolved and available in route 
        //this.eventService.getEvents().subscribe(events => { this.events = events })
        this.events = this.route.snapshot.data['events'];
    };
    EventListComponent.prototype.handleEventClicked = function (data) {
        this.toastr.success(data);
    };
    return EventListComponent;
}());
EventListComponent = __decorate([
    core_1.Component({
        //selector: 'events-list',
        templateUrl: 'app/events/events-list.component.html'
    }),
    __metadata("design:paramtypes", [event_service_1.EventService, toastr_service_1.ToastrService, router_1.ActivatedRoute])
], EventListComponent);
exports.EventListComponent = EventListComponent;
//# sourceMappingURL=events-list.component.js.map