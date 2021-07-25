import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-adminheader',
  templateUrl: './adminheader.component.html',
  styleUrls: ['./adminheader.component.css']
})
export class AdminheaderComponent implements OnInit {

  constructor(private route:ActivatedRoute, private router:Router) { }
  username:string;
  ngOnInit(): void {

  }
  gotohomepage()
  {




        var routeto = "/admin/dashboard";
        this.router.navigateByUrl(routeto);

    console.log();
  }
}
