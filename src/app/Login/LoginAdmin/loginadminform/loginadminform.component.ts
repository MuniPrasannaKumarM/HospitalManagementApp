import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginadminform',
  templateUrl: './loginadminform.component.html',
  styleUrls: ['./loginadminform.component.css']
})
export class LoginadminformComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  loginformdata(loginform:NgForm){
    if(loginform.value.email == 'admin@gmail.com' && loginform.value.password=='admin')
    {
      console.log('admin');
      this.router.navigateByUrl('admin/dashboard')
    }
    else{
      console.log('no admin');
    }
  }
}
