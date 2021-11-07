import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './components/home/home.component';
import {ContactComponent} from './components/contact/contact.component';
import {AboutComponent} from './components/about/about.component';
import {HorizonComponent} from './components/horizon/horizon.component';
import {TerravitaComponent} from './components/terravita/terravita.component';
import {SeineComponent} from './components/seine/seine.component';


const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'gallery/horizon', component: HorizonComponent},
  {path: 'gallery/terravita', component: TerravitaComponent},
  {path: 'gallery/seine', component: SeineComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [
      RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
