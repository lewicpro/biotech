import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterWorkersComponent } from '../register-workers/register-workers.component';

@Component({
  selector: 'app-employee-main',
  templateUrl: './employee-main.component.html',
  styleUrls: ['./employee-main.component.css']
})
export class EmployeeMainComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  registerworker(){
    this.router.navigate(['/Dashboard/attendance/create'])


  }

  removeuser(){
    this.router.navigate(['/Dashboard/attendance/userlist'])
  }

}
