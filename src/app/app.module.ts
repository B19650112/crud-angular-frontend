import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageViewerModule } from "ngx-image-viewer";
import { DecimalMaskDirective } from './tools/decimal-mask.directive';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component';
import { MenuLayoutComponent } from './components/menu-layout/menu-layout.component';
import { LoginLayoutComponent } from './components/login-layout/login-layout.component';
import { LoginComponent } from './components/login/login.component';
import { LoginGuard } from './guard-auth/login.guard';
import { LoginAuthService } from './services/loginauth.service';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ListProductComponent } from './components/tabelproduct/list-product/list-product.component';
import { PrintProductComponent } from './components/tabelproduct/print-product/print-product.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    DecimalMaskDirective,
    HeaderComponent,
    FooterComponent,
    HeaderMenuComponent,
    MenuLayoutComponent,
    LoginLayoutComponent,
    LoginComponent,
    PageNotFoundComponent,
    ListProductComponent,
    PrintProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    MDBBootstrapModule.forRoot(),
    ImageViewerModule.forRoot(),
  ],
  providers: [LoginGuard,LoginAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
