import { Component, OnInit } from '@angular/core';
import { RestapiService } from '../restapi.service';

@Component({
  selector: 'app-edit-workers',
  templateUrl: './edit-workers.component.html',
  styleUrls: ['./edit-workers.component.css']
})
export class EditWorkersComponent implements OnInit {
  all:any;
  pk:any;
  userdata:any
  editval: any;

  constructor(public restapi:RestapiService) {
    this.getdata()
   }

  ngOnInit(): void {
  }
  getdata(){
    this.restapi.getalldata('employee/users/').then(warr=>{
      this.all=warr
    })
  }
  delete(status:any, pk:any){
    this.userdata={
      status:status
    }
    this.restapi.postData(this.userdata, 'employee/deletelist/'+status+'/'+pk+'/').then(data=>{
      this.getdata()

    })

  }

  edit(){
    if (this.editval=='True'){
      this.editval ='False'

    }else{
      this.editval='True';
    }

  }

}
