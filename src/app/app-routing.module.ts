import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AuthGuardService } from './auth/auth-guard.service';
import { EditWorkersComponent } from './edit-workers/edit-workers.component';
import { EmployeeAttendanceDashComponent } from './employee-attendance-dash/employee-attendance-dash.component';
import { EmployeeAttendanceListComponent } from './employee-attendance-list/employee-attendance-list.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { EmployeeMainComponent } from './employee-main/employee-main.component';
import { EmployeeReportComponent } from './employee-report/employee-report.component';
import { FeaturesComponent } from './features/features.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterWorkersComponent } from './register-workers/register-workers.component';

const routes: Routes = [
  {path:'', component:MainComponent},
  {path:'about', component:AboutUsComponent},
  {path:'Dashboard', component:EmployeeDashboardComponent, canActivate: [AuthGuardService], children:[
    {path:'main', component:EmployeeMainComponent},
    {path:'attendance', component:EmployeeAttendanceDashComponent, children:[
      {path:'list', component:EmployeeAttendanceListComponent},
      {path:'report', component:EmployeeReportComponent},
      {path:'create', component:RegisterWorkersComponent},
      {path:'userlist', component:EditWorkersComponent},

    ]},
    {path:'main', component:EmployeeMainComponent},
  ]},
  {path:'features', component:FeaturesComponent},
  {path:'login', component:LoginComponent},

  {path:'**', component:NotfoundComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
