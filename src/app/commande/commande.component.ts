import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AuthService } from '../fire/auth.service';
import { ClientService } from '../fire/client.service';
import { c } from '../interface/inscri.interface';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {

  constructor(private AuthService:AuthService, private client:ClientService ) {

  }

  ngOnInit(): void {
  }


inscription1(b){
  let data : c = b.value
  this.client.addClient1(firebase.default.auth().currentUser.uid,data.name,data.email,data.namepiece,data.tel,data.message,)

}
}
