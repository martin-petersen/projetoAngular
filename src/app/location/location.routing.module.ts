import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LocationComponent} from './location.component';

const routes: Routes = [
  { path: '',
    component: LocationComponent
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LocationRoutingModule { }
