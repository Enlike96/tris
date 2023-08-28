import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrisComponent } from './tris/tris.component';

const routes: Routes = [
  {path:'',component:TrisComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
