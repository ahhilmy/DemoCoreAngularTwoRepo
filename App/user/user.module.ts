import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { userRoutes } from './user.routes'
import { ProfileComponent } from './profile.component'

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(userRoutes)
    ],
    declarations: [
        ProfileComponent
    ],
    providers: [

    ]
})
export class UserModule {

}

/*

This is a feature module (lazy loadable)

Difference between app module
- here we import common module, in app we import browser module
- here RouteModule.forChild, in app RouterModule.forRoot
*/