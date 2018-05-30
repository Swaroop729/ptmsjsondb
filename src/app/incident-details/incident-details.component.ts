import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WebAPIService } from '../../../Service/WebAPI.service';

@Component({
  selector: 'app-incident-details',
  templateUrl: './incident-details.component.html',
  styleUrls: ['./incident-details.component.scss']
})
export class IncidentDetailsComponent implements OnInit {

  Incidents;
  Incident;
  constructor(private route : ActivatedRoute,private service : WebAPIService) { }

  ngOnInit() {

    this.route.paramMap
    .subscribe(givenparams=> {
      let id = +givenparams.get('IncidentId')
      console.log("id",id);
      console.log("going into another function");
      this.anotherfunc(id);
      // this.service.getIncidentDetails(id)
      // .subscribe((Response)=>
      // {
      //   this.Incidents=Response.json()
      //   this.Incident=this.Incidents[0];
      //   console.log("Incident",this.Incident);
      // })
    })
  }
 
  anotherfunc(id){
    console.log("Logging into another function");
    this.service.getIncidentDetails(id)
    .subscribe((Response)=>
    {
      this.Incidents=Response.json()
      this.Incident=this.Incidents[0];
      console.log("Incident",this.Incident);
    })
  }
}
