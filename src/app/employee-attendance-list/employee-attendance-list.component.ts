import { Component, OnInit } from '@angular/core';
import { RestapiService } from '../restapi.service';

@Component({
  selector: 'app-employee-attendance-list',
  templateUrl: './employee-attendance-list.component.html',
  styleUrls: ['./employee-attendance-list.component.css']
})
export class EmployeeAttendanceListComponent implements OnInit {

  datobtained:any;
  k=1;

  constructor(public restapi:RestapiService) {
    this.getdata()
    var man=this
    setInterval(function(){man.getdata() }, 2000);
  }

  ngOnInit(): void {
  }
  getdata(){
    this.restapi.getalldata('employee/attendance/').then(res=>{
      this.datobtained=res
    })
  }
}
