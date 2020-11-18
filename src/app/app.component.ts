import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from './product';
import { ProductService } from './product.service';
import {select, Store} from "@ngrx/store";
import * as fromApp from "./product.reducer"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent  {
   products$: Observable<Product[]>;
  constructor(private productService: ProductService,
              private store: Store<fromApp.ProductState>,
              private router : Router
              ) {
  }
 ngOnInit() {
    
  }

}