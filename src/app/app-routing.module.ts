import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LoginGuard } from './guard-auth/login.guard';
import { MenuLayoutComponent } from './components/menu-layout/menu-layout.component';
import { LoginLayoutComponent } from './components/login-layout/login-layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ListProductComponent } from './components/tabelproduct/list-product/list-product.component';
import { PrintProductComponent } from './components/tabelproduct/print-product/print-product.component';

//routing the address of each component
const routes: Routes = [
  {
    path: '', component: MenuLayoutComponent,
    canActivate: [LoginGuard],
    children: [
      { path: '', component: DashboardComponent, },
      { path: 'dashboard', component: DashboardComponent, },
      { path: 'tabelproduct/listproduct', component: ListProductComponent },
      { path: 'tabelproduct/printproduct', component: PrintProductComponent },
    ]
  },
  {
    path: '', component: LoginLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
    ]
  },
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [DashboardComponent, PageNotFoundComponent, LoginComponent]
