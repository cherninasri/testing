import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private angularfirestore:AngularFirestore) { }



addClient(id,name,email,password) {
  return this.angularfirestore.doc('/client/'+id).set({
   id:id,
    name:name,
    email:email,
    password:password
  })
}
addClient1(id,name,email,namepiece,tel,message) {
  return this.angularfirestore.doc('/client1/'+id).set({
   id:id,
    name:name,
    email:email,
    namepiece:namepiece,
    tel:tel,
    message:message
  })
}
addreclamaion(id,name,email,tel,message) {
  return this.angularfirestore.doc('/dommande/'+id).set({
   id:id,
    name:name,
    email:email,
    tel:tel,
    message:message
  })
}





}
