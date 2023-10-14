import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { HomeComponent } from './Dashboard/home/home.component';
// import { authConfig } from './auth.config';

const routes: Routes = [
  // { path: 'heroes', component: HeroesComponent }
  { path: 'home', component: HomeComponent,pathMatch:'full' },
  // { path: 'auth', component: authConfig },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
