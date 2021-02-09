import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainPageContainerComponent} from './containers/main-page-container/main-page-container.component';


const routes: Routes = [
  {path: '', component: MainPageContainerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPageRoutingModule { }
