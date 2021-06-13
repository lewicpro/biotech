import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class RestapiService {
  datar: any = "http://127.0.0.1:8000"+"/"

  constructor(private http:HttpClient) { }

  getalldata(type:any){

    return new Promise((resolve, reject) =>{
        let headers = new HttpHeaders();
        this.http.get(this.datar + type, {headers: headers})
        .subscribe(res => {
            resolve(res);
        }, (err) =>{
            reject(err);
            // alert(reject(err))
            // alert(err.error)
            alert(JSON.stringify(err))

        });

    });

  }

  sweet(){
    Swal.fire({
      title: 'Success!',
      text: 'Action completed successfully',
      icon: 'success',
      showConfirmButton: false,
      timer: 1500
    })
  }



  postData(credentials:any, type:any){

    return new Promise((resolve, reject) =>{
        let headers = new HttpHeaders();
        this.http.post(this.datar + type, credentials, {headers: headers})
        .subscribe(res => {
            resolve(res);
            this.sweet()
        }, (err) =>{
            reject(err);
            // alert(reject(err))
            // alert(err.error.username)
            // alert(JSON.stringify(err))

        });

    });

  }
}
