import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestapiService } from '../restapi.service';

@Component({
  selector: 'app-employee-report',
  templateUrl: './employee-report.component.html',
  styleUrls: ['./employee-report.component.css']
})
export class EmployeeReportComponent implements OnInit {
  all:any;
  userdata:any;

  constructor(public router:Router, public restapi:RestapiService) {
    this.getdata();
   }

   suspend(report:any, pk:any){
    this.userdata={
      status:status
    }
    this.restapi.postData(this.userdata, 'employee/deletelist/'+report+'/'+pk+'/').then(data=>{
      this.getdata()

    })


   }

  ngOnInit(): void {
  }
  getdata(){
    this.restapi.getalldata('employee/report/').then(warr=>{
      this.all=warr
    })

  }
  submitdate(){

  }

  end(box:any){

  }
  start(box:any){

  }
  Daily(){

  }
  Monthly(){

  }
  Yealy(){

  }

}
