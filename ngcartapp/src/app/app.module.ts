import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { ShoppingModule } from '../shopping/shopping.module';
import {CartService} from "./services/cart.service";
import {ProductService} from "./services/product.service";
import {RouterModule} from "@angular/router";
import {HomeComponent, ListComponent, ManageProductRouteComponent, NotFoundComponent} from "./routes.component";
import {HttpModule} from "@angular/http";
@NgModule({
  declarations: [
    AppComponent,HeaderComponent, HomeComponent, ListComponent, NotFoundComponent, ManageProductRouteComponent
  ],
  imports: [ BrowserModule, ShoppingModule, HttpModule, RouterModule.forRoot(
     [{path: '', component: HomeComponent},
              {path: 'list', component: ListComponent},
       {path: 'manage', component: ManageProductRouteComponent},
       {path: '**', component: NotFoundComponent}]
  )],
  providers: [CartService, ProductService ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
