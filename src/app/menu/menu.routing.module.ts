import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MenuComponent} from './menu.component';

const routes: Routes = [
  { path: '',
    component: MenuComponent,
    children: [
      { path: 'item',
        loadChildren: '../item/item.module#ItemModule'
      },
      { path: 'location',
        loadChildren: '../location/location.module#LocationModule'
      },
      { path: 'category',
        loadChildren: '../category/category.module#CategoryModule'
      },
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
