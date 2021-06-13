import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-attendance-dash',
  templateUrl: './employee-attendance-dash.component.html',
  styleUrls: ['./employee-attendance-dash.component.css']
})
export class EmployeeAttendanceDashComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  attendance(){
    this.router.navigate(['Dashboard/attendance/report'])
  }

}
