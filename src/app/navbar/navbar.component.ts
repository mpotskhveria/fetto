import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'fet-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private router: Router, private activeRoute: ActivatedRoute){}

  redirect(){
    this.router.navigate(['catalog'], {relativeTo: this.activeRoute })
  }

}
