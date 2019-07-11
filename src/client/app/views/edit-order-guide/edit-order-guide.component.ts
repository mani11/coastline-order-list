import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../service/products.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductListComponent } from '../product-list/product-list.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-order-guide',
  templateUrl: './edit-order-guide.component.html',
  styleUrls: ['./edit-order-guide.component.scss']
})
export class EditOrderGuideComponent implements OnInit {

  constructor(private productService: ProductsService,
    public modalService: NgbModal,
    public activeModal: NgbActiveModal) { }
  selectedProducts = this.productService.getSelectedProducts();
  ngOnInit() {
    this.updateList();
  }
  openProductList() {
    this.modalService.open(ProductListComponent);
  };
  deleteSelectedProductList() {
    this.productService.deleteOrderList();
    this.closeModal();
  };
  deleteSelecteItem(product: Object) {
    this.productService.deleteItemInOrderList(product)
  };
  generateOrderList() {
    this.closeModal();
  };
  closeModal() {
    this.activeModal.close();
  };
  updateList() {
    this.productService.selectedProducts$
      .subscribe(res => {
        if (res != null) {
          this.selectedProducts = res;
        }
      })
  };
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



}
