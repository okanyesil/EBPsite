import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'sepetim', loadChildren: () => import('../libs/modules/shopping-cart/shopping-cart.module').then(m => m.ShoppingCartModule)},
  {path: 'main-page', loadChildren: () => import('../libs/modules/main-page/main-page.module').then(m => m.MainPageModule)},
  {path: '**', loadChildren: () => import('../libs/modules/main-page/main-page.module').then(m => m.MainPageModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
