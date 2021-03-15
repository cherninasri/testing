import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 user : Observable<firebase.default.User>
  constructor(private auth:AngularFireAuth) {
    this.user = this.auth.user
  }



inscri(email,password){
  return firebase.default.auth().createUserWithEmailAndPassword(email,password)
}
log(email,password){
return firebase.default.auth().signInWithEmailAndPassword(email,password)
}

logout(){
  firebase.default.auth().signOut()

}



}
