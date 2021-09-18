import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivesComponent } from './directives/directives.component';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { VariablesComponent } from './variables/variables.component';
import { PipesComponent } from './pipes/pipes.component';
const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'intro', component: IntroComponent},
  {path:'varrrrrrrr', component: VariablesComponent},
  {path:'dir', component: DirectivesComponent},
  {path:'pipes', component: PipesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
