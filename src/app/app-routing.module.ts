import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router'
import { LoginComponent } from './login/login.component';
import { DealsComponent } from './deals/deals.component';


const routes: Routes = [
  
  { path: '', component: LoginComponent },
  { path: 'deals', component: DealsComponent }
 
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
