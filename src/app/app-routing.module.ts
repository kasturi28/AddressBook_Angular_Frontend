import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { HomeComponent } from './components/home/home.component';
import { UpdateComponent } from './components/update/update.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"form",component:FormComponent},
  {path:"update/:id", component:FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }