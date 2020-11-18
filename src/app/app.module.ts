import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import {StoreModule} from "@ngrx/store";
import { reducers } from './index';
import {EffectsModule} from "@ngrx/effects";
import { ProductEffect } from './product.effect';
import { ProductService } from './product.service';
import { NgxPaginationModule } from 'ngx-pagination';

const appRoutes: Routes = [
  {path: '', component: ListComponent , pathMatch :"full"},

];

@NgModule({
  imports: [
    BrowserModule, 
  FormsModule,
  HttpClientModule,
  NgxPaginationModule,
  RouterModule.forRoot(appRoutes),
  StoreModule.forRoot(reducers),
  EffectsModule.forRoot([ProductEffect])
  ],
  declarations: [ AppComponent, ListComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ProductService]
})
export class AppModule { }
