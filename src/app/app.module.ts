import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';



import {AngularFireModule} from '@angular/fire';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore} from '@angular/fire/firestore'





import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { CardComponent } from './card/card.component';
import { ReferenceComponent } from './reference/reference.component';
import { TeamComponent } from './team/team.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { InscriComponent } from './inscri/inscri.component';
import { ImagesComponent } from './images/images.component';
import { LaterComponent } from './later/later.component';
import { DomaineComponent } from './domaine/domaine.component';
import { SavoirComponent } from './savoir/savoir.component';
import { Images1Component } from './images1/images1.component';
import { Later1Component } from './later1/later1.component';
import { ExempleComponent } from './exemple/exemple.component';
import { Exemple1Component } from './exemple1/exemple1.component';
import { ServiceimagesComponent } from './serviceimages/serviceimages.component';
import { Serviceimages1Component } from './serviceimages1/serviceimages1.component';
import { MantimagComponent } from './mantimag/mantimag.component';
import { Mantimag1Component } from './mantimag1/mantimag1.component';
import { from } from 'rxjs';
import { AdminComponent } from './admin/admin.component';
import { ProfileComponent } from './profile/profile.component';
import { CommandeComponent } from './commande/commande.component';
import { ReclamationComponent } from './reclamation/reclamation.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    CardComponent,
    ReferenceComponent,
    TeamComponent,
    FooterComponent,
    ContactComponent,
    InscriComponent,
    ImagesComponent,
    LaterComponent,
    DomaineComponent,
    SavoirComponent,
    Images1Component,
    Later1Component,
    ExempleComponent,
    Exemple1Component,
    ServiceimagesComponent,
    Serviceimages1Component,
    MantimagComponent,
    Mantimag1Component,
    AdminComponent,
    ProfileComponent,
    CommandeComponent,
    ReclamationComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDOGs3Y99CMGfL96Y33zlu9eMG0VLtpwqw",
      authDomain: "finpfe-a31af.firebaseapp.com",
      projectId: "finpfe-a31af",
      storageBucket: "finpfe-a31af.appspot.com",
      messagingSenderId: "490946593784",
      appId: "1:490946593784:web:4b1a920706b749bd2e0c0d",
      measurementId: "G-RVZME0FT5S"
    }),
    FormsModule ,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
