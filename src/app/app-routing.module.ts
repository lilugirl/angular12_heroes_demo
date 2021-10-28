import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DaashboardComponent } from './daashboard/daashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroFormComponent } from './hero-form/hero-form.component';

const routes: Routes = [
  {path:'',redirectTo:'/dashboard',pathMatch:'full'},
  {path:'dashboard',component:DaashboardComponent},
  {path:'heroes',component:HeroesComponent},
  {path:'detail/:id',component:HeroDetailComponent},
  {path:'form',component:HeroFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
