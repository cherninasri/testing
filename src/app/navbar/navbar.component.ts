import { Component, OnInit } from '@angular/core';
import { AuthService } from '../fire/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isUser : boolean = false
  constructor(private AuthService:AuthService) { }

  ngOnInit(): void {

    this.AuthService.user.subscribe(user =>{
      if(user){
        this.isUser = true

      }else{ this.isUser = false}
    })





  }

  Logout(){
    this.AuthService.logout()
  }

}
