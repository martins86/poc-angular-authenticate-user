import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'people'
  },
  {
    path: 'people',
    loadChildren: () =>
      import('./people/people.module').then((module) => module.PeopleModule),
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./products/products.module').then((module) => module.ProductsModule),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
