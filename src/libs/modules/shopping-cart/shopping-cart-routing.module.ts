import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasketContainerComponent } from './container/basket-container/basket-container.component';


const routes: Routes = [
  {
    path:"",
    pathMatch:"full",
    component:BasketContainerComponent
  },
  {
    path:"mainPage",
    loadChildren: () => import('../main-page/main-page.module').then(m => m.MainPageModule),
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingCartRoutingModule { }
