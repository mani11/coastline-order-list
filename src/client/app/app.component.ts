import { Component } from '@angular/core';
import { ProductListComponent } from './views/product-list/product-list.component';
import { ProductsService } from './service/products.service';
import { ModalService } from './service/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'coastline-order-list';
  //private totalAmount:number;
  constructor(
    private productService: ProductsService,
    private modalService: ModalService) { }
   

  ngOnInit(){
    
  }
  openProductList() {
    this.productService.getProducts('products');
    this.modalService.openModal(ProductListComponent);
  }
}
