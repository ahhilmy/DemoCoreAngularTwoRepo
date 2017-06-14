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
var EventThumbnailComponent = (function () {
    function EventThumbnailComponent() {
        //@Output() tells this is a output property of the component
        //EventEmitter() is also angular element
        this.eventClick = new core_1.EventEmitter();
        //some public property
        this.someProperty = "some value";
    }
    EventThumbnailComponent.prototype.handleClickMe = function () {
        this.eventClick.emit(this.event.name);
    };
    EventThumbnailComponent.prototype.logFoo = function () {
        console.log('Foo');
    };
    EventThumbnailComponent.prototype.getStartTimeClass = function () {
        //[ngClass] can be provided with an object, string(space seperated list of classes) or array of strings
        var isEarlyStart = this.event && this.event.time === '8:00 am';
        return { green: isEarlyStart, bold: isEarlyStart };
        //return 'green bold'
        //return ['green','bold']
    };
    // this can be used as a expression for [ngStyle]
    //:any is needed because function is returning two different looking objects
    EventThumbnailComponent.prototype.getStartTimeStyle = function () {
        if (this.event && this.event.time === '8:00 am')
            return { color: '#003300', 'font-weight': 'bold' };
        return {};
    };
    return EventThumbnailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], EventThumbnailComponent.prototype, "event", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], EventThumbnailComponent.prototype, "showClickMe", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], EventThumbnailComponent.prototype, "eventClick", void 0);
EventThumbnailComponent = __decorate([
    core_1.Component({
        selector: 'event-thumbnail',
        template: "\n        <!-- [routerLink] will turn the div into a link which will navigate to /events -->\n        <div [routerLink]=\"['/events', event.id]\" class=\"well hoverwell thumbnail\">\n            <!-- ? is safe navigator operator which will handle undefined event causing run time errors -->\n            <h2 style=\"margin-top:0px;\">{{event?.name}}</h2>\n\n            <!-- [ngClass] - this is ngClass expression, this instance it will return a object with two properties on it  -->\n            <!-- this will add both the returned classes to the element  -->\n            <div [ngClass]=\"{green: event?.time === '8:00 am', bold: event?.time === '8:00 am'}\">Date: {{event?.date}}</div>\n            \n            <!-- [ngClass] expression returned through a function call -->\n            <div [ngSwitch]=\"event?.time\" [ngClass]=\"getStartTimeClass()\">\n                <span>Time: {{event?.time}}</span>\n                <span *ngSwitchCase=\"'8:00 am'\">(Early Start)</span>\n                <span *ngSwitchCase=\"'10:00 am'\">(Late Start)</span>\n                <span *ngSwitchDefault>(Normal Start)</span>\n            </div>\n            \n            <!-- [class.green] - this is a special binding called CLASS BINDING  -->\n            <div [class.green]=\"event?.time === '8:00 am'\">Price: ${{ event?.price }}</div>\n            \n            <div [ngStyle]=\"getStartTimeStyle()\" *ngIf=\"event?.location\">\n                <span>Location: {{event?.location?.address}}</span>                \n                <span class=\"pad-left\">{{event?.location?.city}}, {{event?.location?.country}}</span>\n            </div>\n            <div [hidden]=\"!event?.onlineUrl\">\n                Online URL: {{event?.onlineUrl}}\n            </div>\n            <button class=\"btn btn-primary pad-top-btn\" (click)=\"handleClickMe()\" *ngIf=\"showClickMe\">Click me!</button>\n        </div>\n    ",
        styles: ["\n        .green { color: #003300 !important; }\n        .bold { font-weight: bold; }\n        .pad-left { margin-left: 10px; }\n        .well div { color: #286090; }\n        .pad-top-btn { margin-top: 10px; }\n        .thumbnail { min-height: 170px; cursor: pointer; }\n    "]
    })
], EventThumbnailComponent);
exports.EventThumbnailComponent = EventThumbnailComponent;
//# sourceMappingURL=event-thumbnail.component.js.map