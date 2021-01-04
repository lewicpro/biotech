import { Component, OnInit } from '@angular/core';
import {of} from 'rxjs'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  count$=of(NaN)

  constructor() { }

  ngOnInit(): void {
  }

}
