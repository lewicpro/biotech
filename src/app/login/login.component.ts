import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {of} from 'rxjs'
import { RestapiService } from '../restapi.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userdata: any;
  responsedata: any;
  username:any;
  errr:any;
  password:any;
  passerror:any;
  usererror:any;

  constructor(public restapi:RestapiService, public router:Router) {


   }

  ngOnInit(): void {
  }
  pass(box:any){
    this.errr=""
    this.password = box

  }
  user(box:any){
    this.errr=""
    this.username = box

  }

  login(){
    this.userdata={
      username:this.username,
      password:this.password
    }
    this.restapi.postData(this.userdata,'api/auth/jwt/').then(res=>{
      this.responsedata=res;
      console.log('humu imepita kirahisi')
      localStorage.setItem('token', this.responsedata.token)
      localStorage.setItem('user', this.userdata.username)
      this.router.navigate(['/Dashboard/main'])
    }).catch(error=>{
      alert(JSON.stringify(error.error))
      this.errr=error.error

    })

  }

}
