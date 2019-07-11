import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditOrderGuideComponent } from '../edit-order-guide/edit-order-guide.component';
import { ProductsService } from '../../service/products.service';

@Component({
  selector: 'app-order-guide',
  templateUrl: './order-guide.component.html',
  styleUrls: ['./order-guide.component.scss']
})
export class OrderGuideComponent implements OnInit {
  selectedProducts = [];
  public closed = false;
  public isVisible = "hide";
  constructor(private modalService: NgbModal,
    private productService: ProductsService
    ) { }
   
  ngOnInit() {
    this.selectedProducts = this.productService.getSelectedProducts();
    this.getSelectedProduct();
  }
  openEditGuide(){
    this.modalService.open(EditOrderGuideComponent);
  }
  getSelectedProduct(){
    this.productService.selectedProducts$
    .subscribe(res => {
      if(res != null){
        this.selectedProducts = res;
      }
    })
  }
  decrementQuantity(product:any){
    product.minQuantity = product.minQuantity == 0?0: product.minQuantity-product.boxSize;
    product.orderQuantity = product.minQuantity;
    this.productService.updateOrderQuantity(product)
  }
  incrementQuantity(product:any){
    product.minQuantity = product.minQuantity + product.boxSize;
    product.orderQuantity = product.minQuantity;
    this.productService.updateOrderQuantity(product)
  }

  placeOrder(){
    var products = this.productService.getSelectedProducts();
    this.productService.placeOrder('products',products);
    this.isVisible = "show";

  }
}
