import { WebAPIService } from '../../../Service/WebAPI.service';
import { Component, OnInit } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
import { PushNotificationComponent } from 'ng2-notifications/ng2-notifications';

@Component({
  selector: 'Incident',
  templateUrl: './incident.component.html',
  styleUrls: ['./incident.component.css'],
  
})
export class IncidentComponent implements OnInit {
  Incidents;
  tomorrow = new Date(2017, 9, 20, 14,34);
  options = {
    position: ["bottom", "left"],
    timeOut: 5000,
    lastOnBottom: true
}
  
  constructor(Service :  WebAPIService,private _notificationsService : NotificationsService) {

    Service.getIncidents()
    .subscribe((Response)=>
    {
      this.Incidents=Response.json()
    })
    }


notify1(val : HTMLInputElement){
  console.log(val)
  }

    notify(){
      this._notificationsService.success(
        'Some Title',
        'Some Content',
        {
            timeOut: 5000,
            showProgressBar: true,
            pauseOnHover: false,
            clickToClose: false,
            maxLength: 10
        }
    )
    }

  ngOnInit(  )  {
    
  }
 
}
