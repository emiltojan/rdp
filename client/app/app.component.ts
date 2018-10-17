import {Component} from '@angular/core';
import {RdpConnectionComponent} from './components/rdp_connection/rdp_connection.component';
import {RdpService} from './services/rdp.service';

@Component({
    moduleId:module.id,
    selector:'my-app',
    templateUrl:'app.component.html',
    providers:[RdpService]
})

export class AppComponent { }