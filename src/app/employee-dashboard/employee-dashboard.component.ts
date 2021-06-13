import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  attendancereport(){
    this.router.navigate(['Dashboard/attendance/report'])
  }

  attendance(){
    this.router.navigate(['/Dashboard/attendance/list'])
  }

  main(){
    this.router.navigate(['/Dashboard/main'])
  }

}

