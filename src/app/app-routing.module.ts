import { Reference } from '@angular/compiler/src/render3/r3_ast';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { CommandeComponent } from './commande/commande.component';
import { ContactComponent } from './contact/contact.component';
import { DomaineComponent } from './domaine/domaine.component';
import { ExempleComponent } from './exemple/exemple.component';
import { Exemple1Component } from './exemple1/exemple1.component';
import { HomeComponent } from './home/home.component';
import { InscriComponent } from './inscri/inscri.component';
import { ProfileComponent } from './profile/profile.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { ReferenceComponent } from './reference/reference.component';
import { SavoirComponent } from './savoir/savoir.component';
import { ServicesComponent } from './services/services.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  {​​​​​ path:'',component:HomeComponent},
  {​​​​​ path:'home',component:HomeComponent}​​​​​,
  {​​​​​ path:'about',component:AboutComponent}​​​​​,
  {​​​​​ path:'services',component:ServicesComponent}​​​​​,
  {​​​​​ path:'references',component:ReferenceComponent}​​​​​,
  {​​​​​ path:'team',component:TeamComponent}​​​​​,
  {​​​​​ path:'inscri',component:InscriComponent}​​​​​,
  {​​​​​ path:'domaine',component:DomaineComponent}​​​​​,
  {​​​​​ path:'savoir',component:SavoirComponent}​​​​​,
  {​​​​​ path:'exemple',component:ExempleComponent}​​​​​,
  {​​​​​ path:'exemple1',component:Exemple1Component}​​​​​,
  {​​​​​ path:'admin',component:AdminComponent}​​​​​,
  {​​​​​ path:'profile',component:ProfileComponent}​​​​​,
  {​​​​​ path:'commande',component:CommandeComponent}​​​​​,
  {​​​​​ path:'reclamation',component:ReclamationComponent}​​​​​,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
