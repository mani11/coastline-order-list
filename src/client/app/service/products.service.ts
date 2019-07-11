import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { ApiService } from './api.service';
import { AppStateService } from './app-state.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private productsAddedToOrder = [];

  private _getProductList = new Subject<any>();
  productList$ = this._getProductList.asObservable();
  private _selectedProducts = new Subject<any>();
  selectedProducts$ = this._selectedProducts.asObservable();

  constructor(private apiService: ApiService,
    private appState: AppStateService) { }

  getProducts(url: string) {
    this.apiService.get(url).subscribe(response => {
      this._getProductList.next(response);
    });
  }
  getSelectedProducts(){
    return this.appState.getFromLocalStorage();
  }
  placeOrder(url: string, body: any) {
    this.apiService.put(url, body).subscribe((response) => {
      this.deleteOrderList();
    })
  }
  setOrderGuideToLocalStorage(selectedProducts: any) {
    this.productsAddedToOrder = this.appState.getFromLocalStorage();
    if (this.productsAddedToOrder != null) {
      for (var i = 0; i < selectedProducts.length; i++) {
        this.productsAddedToOrder.push(selectedProducts[i]);
      }
    }
    else {
      this.productsAddedToOrder = selectedProducts;
    }
    this.appState.setToLocalStorage(this.productsAddedToOrder);
    this._selectedProducts.next(this.appState.getFromLocalStorage())

  }
  deleteOrderList() {
    localStorage.removeItem('selectedProducts');
    this._selectedProducts.next(this.appState.getFromLocalStorage())

  }
  deleteItemInOrderList(product: Object) {
    var selectedItem = this.appState.getFromLocalStorage().filter((p) => {
      return p['_id'] != product['_id'];
    })
    this.appState.setToLocalStorage(selectedItem);
    this._selectedProducts.next(this.appState.getFromLocalStorage())
  }

  updateOrderQuantity(product: any) {
    var items = this.appState.getFromLocalStorage()
    var l = items.length;
    for (var i = 0; i < l; i++) {
      if (items[i]['_id'] === product['_id']) {
        items[i] = product;
        this.appState.setToLocalStorage(items);
      }

    }
    this._selectedProducts.next(this.appState.getFromLocalStorage());

  }
}
