import { DataSrevice } from './../../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {
  public products$: Observable<any[]>;


  constructor( private data: DataSrevice) { }
  ngOnInit() {
    this.products$ = this.data.getProducts();
  }

}
