import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImagesComponent } from './images/images.component';
import { NewphotosComponent } from './newphotos/newphotos.component';

const routes: Routes = [
  {path:'' , component:ImagesComponent}
  ,{path:'newphotos', component:NewphotosComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
