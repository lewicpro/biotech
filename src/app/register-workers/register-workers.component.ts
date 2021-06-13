import { Component, OnInit } from '@angular/core';
import { RestapiService } from '../restapi.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-register-workers',
  templateUrl: './register-workers.component.html',
  styleUrls: ['./register-workers.component.css']
})
export class RegisterWorkersComponent implements OnInit {
  physicaladressval: any;
  passwordsval: any;
  regionalval: any;
  phonenumberval: any;
  usernameval: any;
  nationalityval: any;
  genderval: any;
  depertmentnameval: any;
  userdata: any;
  Emailnameval: any;
  fullnameval: any;
  timedate="2021-1-19 10:59:44";

  constructor(public restapi:RestapiService) { }

  ngOnInit(): void {
  }
  physicaladress(box:any){
    this.physicaladressval=box

  }
  passwords(box:any){
    this.passwordsval=box

  }
  phonenumber(box:any){
    this.phonenumberval=box

  }
  username(box:any){
    this.usernameval=box

  }
  regional(box:any){
    this.regionalval=box

  }
  nationality(box:any){
    this.nationalityval=box

  }
  gender(box:any){
    this.genderval=box

  }
  depertmentname(box:any){
    this.depertmentnameval=box

  }
  Emailname(box:any){
    this.Emailnameval=box

  }
  fullname(box:any){
    this.fullnameval=box

  }
  alerted(){
    Swal.fire({

      icon: 'success',
      title: 'Your client has been added',
      showConfirmButton: false,
      timer: 1500
    })


  }

  submit(){

    this.userdata={date_registered:this.timedate, user:this.usernameval, name:this.fullnameval, Depertment:this.depertmentnameval, office:this.physicaladressval,Email:this.Emailnameval, Phone:this.phonenumberval, Gender:this.genderval, Nationality:this.nationalityval, regional:this.regional}
    this.restapi.postData(this.userdata, 'employee/create/').then(data=>{
      this.alerted()
      this.Emailnameval =null
      this.depertmentnameval =null
      this.genderval =null
      this.phonenumberval =null
      this.physicaladressval =null
      this.passwordsval =null
      this.Emailnameval =null
      this.fullnameval =null
      this.fullnameval =null
      this.fullnameval =null
      this.fullnameval =null
      this.fullnameval =null
      this.fullnameval =null

    })
  }

}
