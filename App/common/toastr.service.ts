import { Injectable } from '@angular/core'

//declare the global object so typescript will not complain about it
declare let toastr:any

//with Injectable angular knows about the service
//this is a injectable toastr service
@Injectable()
export class ToastrService {
    success(message: string, title?: string) {
        toastr.success(message, title)
    }
    info(message: string, title?: string) {
        toastr.info(message, title)
    }
    warning(message: string, title?: string) {
        toastr.warning(message, title)
    }
    error(message: string, title?: string) {
        toastr.error(message, title)
    }
}