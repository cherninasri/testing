import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AuthService } from '../fire/auth.service';
import { ClientService } from '../fire/client.service';
import {  n } from '../interface/inscri.interface';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent implements OnInit {

  constructor(private AuthService:AuthService, private client:ClientService) { }

  ngOnInit(): void {
  }
  inscription1(b){
    let data : n = b.value
    this.client.addreclamaion (firebase.default.auth().currentUser.uid,data.email,data.name,data.tel,data.message)

  }
}
