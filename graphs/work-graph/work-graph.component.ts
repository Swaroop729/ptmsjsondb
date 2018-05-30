import { Component, OnInit } from '@angular/core';
import { WebAPIService } from '../../Service/WebAPI.service';

@Component({
  selector: 'app-work-graph',
  templateUrl: './work-graph.component.html',
  styleUrls: ['./work-graph.component.scss']
})
export class WorkGraphComponent implements OnInit {

  id = 'chart1';
  id2='chart2';
  width = 600;
  height = 400;
  // type = 'column2d';
  type = 'pie3d';
  type2='column2d';
  dataFormat = 'json';
  dataSource;
  title = 'Angular4 FusionCharts Sample';

  constructor(private Service : WebAPIService) {
    var obj = this.Service.CountByAppNames();
    // console.log("Obj",JSON.stringify(obj,undefined,2))

    this.dataSource= {
        "chart": {
            "caption": "Ticket's count based on Application",
            "subCaption": "Tickets grouped by Application",
            // "numberprefix": "$",
            "theme": "fint"
        },
        "data": obj
        // "data":[{
        //                       "App": "Garden Groove harbour",
        //                       "value": 730000
        //                   }]

        
      }





//       this.dataSource = {
//           "chart": {
//               "caption": "Harry's SuperMart",
//               "subCaption": "Top 5 stores in last month by revenue",
//               "numberprefix": "$",
//               "theme": "fint"
//           },
//           "data": [
//               {
//                   "label": "Bakersfield Central",
//                   "value": "880000"
//               },
//               {
//                   "label": "Garden Groove harbour",
//                   "value": "730000"
//               },
//               {
//                   "label": "Los Angeles Topanga",
//                   "value": "590000"
//               },
//               {
//                   "label": "Compton-Rancho Dom",
//                   "value": "520000"
//               },
//               {
//                   "label": "Daly City Serramonte",
//                   "value": "330000"
//               }
//           ]
//       }
//   }
    }
  ngOnInit() {
  }

}



