import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CreatePlanComponent } from './pages/create-plan/create-plan.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FooterComponent } from './footer/footer/footer.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { ModalComponent } from './shared/modal/modal.component';
import { BannerComponent } from './shared/banner/banner.component';
import { ButtonComponent } from './shared/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreatePlanComponent,
    AboutUsComponent,
    NotFoundComponent,
    FooterComponent,
    NavbarComponent,
    ModalComponent,
    BannerComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
