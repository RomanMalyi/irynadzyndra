import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {SlideshowModule} from 'ng-simple-slideshow';
import {HashLocationStrategy, Location, LocationStrategy} from '@angular/common';
import { HttpClientModule} from '@angular/common/http';
import { NgxImageGalleryModule } from 'ngx-image-gallery';


import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {ContactComponent} from './components/contact/contact.component';
import {AppRoutingModule} from './app-routing.module';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {HorizonComponent} from './components/horizon/horizon.component';
import {TerravitaComponent} from './components/terravita/terravita.component';
import {PageDataService} from './services/page-data.service';
import { SeineComponent } from './components/seine/seine.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    HorizonComponent,
    TerravitaComponent,
    SeineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlideshowModule,
    HttpClientModule,
    NgxImageGalleryModule
  ],
  providers: [
    Location,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    PageDataService
  ]
  ,
  bootstrap: [AppComponent]
})
export class AppModule {
}
