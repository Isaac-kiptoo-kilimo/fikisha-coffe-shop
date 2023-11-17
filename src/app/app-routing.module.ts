import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CreatePlanComponent } from './pages/create-plan/create-plan.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FooterComponent } from './footer/footer/footer.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'plan', component: CreatePlanComponent },
  { path: '', pathMatch: 'full', redirectTo: '' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
