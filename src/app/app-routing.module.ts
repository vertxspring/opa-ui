import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from 'src/app/second/second.component';

const routes: Routes = [
  { path: '', component: FirstComponent, data: { title: 'First Component' } },
  { path: 'first', component: FirstComponent, data: { title: 'First Component' } },
  { path: 'second', component: SecondComponent, data: { title: 'Second Component' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
