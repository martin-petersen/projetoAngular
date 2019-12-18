import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  { path: 'menu',
    loadChildren: './menu/menu.module#MenuModule'
  },
  { path: '',
    pathMatch: 'full',
    redirectTo: '/menu'
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
