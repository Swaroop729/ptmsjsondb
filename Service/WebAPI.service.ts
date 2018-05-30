import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ICountofTickets } from '../src/Interfaces/CountofTickets';




@Injectable()
export class WebAPIService {
  // url = 'https://my-json-server.typicode.com/Swaroop729/WebAPI'
  // url = 'https://my-json-server.typicode.com/Swaroop729/WebAPI/db'

  // Using the json-server 
  // url='  http://localhost:3000/Incidents'
 url = 'https://my-json-server.typicode.com/Swaroop729/WebAPI/Incidents/'
 CQA;
 Scorecard;
 Gupta;
ListByGroupNames: Array<ICountofTickets>= [];


    constructor(private http : Http) {    }



    getIncidents(){
      return this.http.get(this.url);
     }

     getIncidentDetails(id:number): any {
      return this.http.get(this.url + '/?IncidentId=' + id);    
    }

    putIncident(post){
      // return this.http.put(this.url + '?IncidentId=' + post.IncidentId,JSON.stringify(post))
      return this.http.put(this.url + post.Id,JSON.stringify(post))
     }

     CountByAppNames(){
      this.http.get(this.url + '?ApplicationName=' + "CQA")
      .subscribe((response)=>{
        this.CQA=response.json().length;
        this.ListByGroupNames.push({label:"CQA",value:this.CQA});
      })
      this.http.get(this.url + '?ApplicationName=' + "Scorecard")
      .subscribe((response)=>{
        this.Scorecard=response.json().length;
        this.ListByGroupNames.push({label:"Scorecard",value:this.Scorecard})
      })
      this.http.get(this.url + '?ApplicationName=' + "Gupta")
      .subscribe((response)=>{
        this.Gupta=response.json().length;
        this.ListByGroupNames.push({label:"Gupta",value:this.Gupta})
      })
      return this.ListByGroupNames;
     }
  }