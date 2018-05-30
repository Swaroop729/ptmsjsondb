import { Component, OnInit } from '@angular/core';
import { WebAPIService } from '../../../Service/WebAPI.service';
import { IIncidents} from '../../Interfaces/Incidents'

@Component({
  selector: 'tasks-management',
  templateUrl: './tasks-management.component.html',
  styleUrls: ['./tasks-management.component.scss']
})
export class TasksManagementComponent implements OnInit {
  Incidents:  Array<IIncidents>;
  Upcoming: Array<string> = ['Sugar Ray Robinson', 'Muhammad Ali', 'George Foreman', 'Joe Frazier', 'Jake LaMotta', 'Joe Louis', 'Jack Dempsey', 'Rocky Marciano', 'Mike Tyson', 'Oscar De La Hoya'];
  InProgress: Array<string> = ['Sugar Ray Robinson', 'Muhammad Ali'];
  Complete : Array<IIncidents>;
  constructor(Service :  WebAPIService) {

    Service.getIncidents()
    .subscribe((Response)=>
    {
      this.Incidents=Response.json()
      this.Complete=Response.json()
    })
   }


  ngOnInit() {
  }

}


