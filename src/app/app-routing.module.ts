import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import {PrincesComponent} from './princes/princes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';


const routes: Routes = [
  {path: 'princes', component: PrincesComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'details/:id', component: HeroDetailComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

