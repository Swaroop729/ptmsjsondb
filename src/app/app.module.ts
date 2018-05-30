import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { HttpModule } from '@angular/http';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule} from '@angular/router';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { PushNotificationComponent } from 'ng2-notifications/ng2-notifications';
import { VerticalTimelineModule} from 'angular-vertical-timeline'
import {DndModule} from 'ng2-dnd';
// import { NDV_DIRECTIVES } from 'angular2-click-to-edit/components';
import {InputEditorModule} from 'angular-inline-editors';
import { SelectEditorModule } from 'angular-inline-editors';
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FintTheme from 'fusioncharts/themes/fusioncharts.theme.fint';
import { FusionChartsModule } from 'angular4-fusioncharts';

import { AppComponent } from './app.component';
import { IncidentComponent } from './incident/incident.component';
import { WebAPIService } from '../../Service/WebAPI.service';
import { HomePageComponent } from './home-page/home-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TasksManagementComponent } from './tasks-management/tasks-management.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IncidentsComponent } from './incidents/incidents.component';
import { IncidentDetailsComponent } from './incident-details/incident-details.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { WorkGraphComponent } from '../../graphs/work-graph/work-graph.component'


@NgModule({
  declarations: [
    AppComponent,
    IncidentComponent,
    HomePageComponent,
    PushNotificationComponent,
    DashboardComponent,
    TasksManagementComponent,
    NavbarComponent,
    IncidentsComponent,
    IncidentDetailsComponent,
    TaskDetailComponent,
    WorkGraphComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatButtonModule,
    MatProgressBarModule,
    MatCardModule,
    // FusionChartsModule,
    FusionChartsModule.forRoot(FusionCharts, Charts, FintTheme),
    DndModule.forRoot(),
    VerticalTimelineModule,
    SimpleNotificationsModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    InputEditorModule.forRoot(),
    SelectEditorModule.forRoot(),
    RouterModule.forRoot([
      {      path:'Home' , component:HomePageComponent,    },
      {      path:'Incident' , component:IncidentComponent,    },
      {      path:'Incidents' , component:IncidentsComponent,    },
      {      path:'TaskManagement' , component:TasksManagementComponent,    },
      {      path:'WorkGraph' , component:WorkGraphComponent,    },
      {      path:'IncidentDetail/:IncidentId' , component:IncidentDetailsComponent,    },
      {      path:'**' , component:HomePageComponent,    },
    
    ])

  ],
  providers: [WebAPIService,PushNotificationComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
