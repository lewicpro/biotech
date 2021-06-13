import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FeaturesComponent } from './features/features.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { EmployeeMainComponent } from './employee-main/employee-main.component';
import { EmployeeAttendanceListComponent } from './employee-attendance-list/employee-attendance-list.component';
import { EmployeeAttendanceDashComponent } from './employee-attendance-dash/employee-attendance-dash.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeReportComponent } from './employee-report/employee-report.component';
import { RegisterWorkersComponent } from './register-workers/register-workers.component';
import { EditWorkersComponent } from './edit-workers/edit-workers.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavigationComponent,
    FooterComponent,
    LoginComponent,
    AboutUsComponent,
    FeaturesComponent,
    NotfoundComponent,
    EmployeeDashboardComponent,
    EmployeeMainComponent,
    EmployeeAttendanceListComponent,
    EmployeeAttendanceDashComponent,
    EmployeeReportComponent,
    RegisterWorkersComponent,
    EditWorkersComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    // BrowserAnimationsModule
  ],
  providers: [HttpClient,],
  bootstrap: [AppComponent]
})
export class AppModule { }
