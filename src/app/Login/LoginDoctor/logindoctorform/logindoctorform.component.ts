import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DoctorDetails } from 'src/app/Models/doctorDetails';
import { DoctorDetailsService } from 'src/app/Services/doctorDetailsService';

@Component({
  selector: 'app-logindoctorform',
  templateUrl: './logindoctorform.component.html',
  styleUrls: ['./logindoctorform.component.css']
})
export class LogindoctorformComponent implements OnInit {

  constructor(private doctorDetailService:DoctorDetailsService, private router:Router) { }
  id:number;
  ngOnInit(): void {
  }
  loginformdata(loginform:NgForm){
    this.doctorDetailService.getDoctorsByEmailAndPassword(loginform.value.email,loginform.value.password).subscribe(
      (response:DoctorDetails)=>{

        if (response != null){
          this.id = response.doctor_id ;
          var rout = '/doctor/dashboard/'+this.id;
          this.router.navigateByUrl(rout);
        }
        else{
          alert("Login Not Permitted!!!! Check with Admin to Process your Request!!!");

        }
      }
    );
  }
}
