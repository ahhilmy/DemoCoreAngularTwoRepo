import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'event-thumbnail',
    template: `
        <!-- [routerLink] will turn the div into a link which will navigate to /events -->
        <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
            <!-- ? is safe navigator operator which will handle undefined event causing run time errors -->
            <h2 style="margin-top:0px;">{{event?.name}}</h2>

            <!-- [ngClass] - this is ngClass expression, this instance it will return a object with two properties on it  -->
            <!-- this will add both the returned classes to the element  -->
            <div [ngClass]="{green: event?.time === '8:00 am', bold: event?.time === '8:00 am'}">Date: {{event?.date}}</div>
            
            <!-- [ngClass] expression returned through a function call -->
            <div [ngSwitch]="event?.time" [ngClass]="getStartTimeClass()">
                <span>Time: {{event?.time}}</span>
                <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
                <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
                <span *ngSwitchDefault>(Normal Start)</span>
            </div>
            
            <!-- [class.green] - this is a special binding called CLASS BINDING  -->
            <div [class.green]="event?.time === '8:00 am'">Price: \${{ event?.price }}</div>
            
            <div [ngStyle]="getStartTimeStyle()" *ngIf="event?.location">
                <span>Location: {{event?.location?.address}}</span>                
                <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
            </div>
            <div [hidden]="!event?.onlineUrl">
                Online URL: {{event?.onlineUrl}}
            </div>
            <button class="btn btn-primary pad-top-btn" (click)="handleClickMe()" *ngIf="showClickMe">Click me!</button>
        </div>
    `,
    styles: [`
        .green { color: #003300 !important; }
        .bold { font-weight: bold; }
        .pad-left { margin-left: 10px; }
        .well div { color: #286090; }
        .pad-top-btn { margin-top: 10px; }
        .thumbnail { min-height: 170px; cursor: pointer; }
    `]
})
export class EventThumbnailComponent {
    //@Input() tells angular this property will be passed in from another component
    @Input() event: any
    @Input() showClickMe: boolean

    //@Output() tells this is a output property of the component
    //EventEmitter() is also angular element
    @Output() eventClick = new EventEmitter()

    //some public property
    someProperty: any = "some value"

    handleClickMe() {
        this.eventClick.emit(this.event.name)
    }

    logFoo() {
        console.log('Foo');
    }

    getStartTimeClass() {
        //[ngClass] can be provided with an object, string(space seperated list of classes) or array of strings

        const isEarlyStart = this.event && this.event.time === '8:00 am'
        return { green: isEarlyStart, bold: isEarlyStart }

        //return 'green bold'
        //return ['green','bold']
    }

    // this can be used as a expression for [ngStyle]
    //:any is needed because function is returning two different looking objects
    getStartTimeStyle(): any {
        if (this.event && this.event.time === '8:00 am')
            return { color: '#003300', 'font-weight': 'bold' }

        return {}
    }
}