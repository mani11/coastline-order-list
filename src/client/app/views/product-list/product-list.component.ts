import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../service/products.service';
import { ProductModel } from '../../models/product-model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products : ProductModel[];
  selectedProducts = [];
  constructor(private productService : ProductsService,
    private modalService:NgbActiveModal) { }
  // products = [
  //   {
  //     "_id": "5d124e32fb6fc00e79b02794",
  //     "archived": false,
  //     "boxSize": 1,
  //     "category": "Frozen,Whole,Sockeye",
  //     "cutoff": 18,
  //     "deliveryDays": {
  //       "friday": true,
  //       "monday": true,
  //       "saturday": true,
  //       "thursday": true,
  //       "tuesday": true,
  //       "wednesday": true
  //     },
  //     "description": "Sockeye salmon are distinguished by their bright red and rich fillets, which is also what makes them prized by sushi chefs. These salmon hatch in fresh water, spend part of their life feeding in the ocean and then “run” back to their natal rivers to spawn and die. \n\nSockeye have a bright blue or bluish green back and silver belly. Upon returning to fresh water, their skin turns bright red with light green heads. They are a muscular fish with large glistening scales. The sockeye’s oily richness and firm flesh make it perfect for grilling.  Our whole Salmon are 6-9lbs per fish.",
  //     "fisherId": "imYzcK2Y12X1du9Da2k7ygO4FV83",
  //     "hidden": true,
  //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/duckr-b8e76.appspot.com/o/products%2F-LeNOwu63tK5JAEl2dFT?alt=media&token=c9a60b89-20cb-4e77-b7a1-477bc0d0ea9f",
  //     "leadTime": 3,
  //     "name": "Char, Arctic (Fresh • Whole)",
  //     "productId": "5d124e32fb6fc00e79b02794",
  //     "purchasePrice": 1.49,
  //     "minQuantity": 1,
  //     "regionId": "-K_B1FCXvwC9mm2lQJnJ",
  //     "selectedDay": "Tuesday, 25 Jun  2019",
  //     "sellingPrice": 5.74,
  //     "timestamp": 1557335101093,
  //     "trackingId": "jxb9m9to187",
  //     "unitQuantity": "case",
  //     "orderQuantity": 15
  //   },
  //   {
  //     "_id": "5d124f8ffb6fc00e79b0281e",
  //     "archived": false,
  //     "boxSize": 1,
  //     "category": "Frozen,Whole,Clams",
  //     "cutoff": 12,
  //     "deliveryDays": {
  //       "friday": true,
  //       "monday": true,
  //       "saturday": true,
  //       "thursday": true,
  //       "tuesday": true,
  //       "wednesday": true
  //     },
  //     "description": "Sockeye salmon are distinguished by their bright red and rich fillets, which is also what makes them prized by sushi chefs. These salmon hatch in fresh water, spend part of their life feeding in the ocean and then “run” back to their natal rivers to spawn and die. \n\nSockeye have a bright blue or bluish green back and silver belly. Upon returning to fresh water, their skin turns bright red with light green heads. They are a muscular fish with large glistening scales. The sockeye’s oily richness and firm flesh make it perfect for grilling.  Our whole Salmon are 6-9lbs per fish.",
  //     "fisherId": "imYzcK2Y12X1du9Da2k7ygO4FV83",
  //     "hidden": true,
  //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/duckr-b8e76.appspot.com/o/products%2F-LeNOwu63tK5JAEl2dFT?alt=media&token=c9a60b89-20cb-4e77-b7a1-477bc0d0ea9f",
  //     "leadTime": 5,
  //     "name": "Clams, Razor (IQF • Meat)",
  //     "productId": "5d124f8ffb6fc00e79b0281e",
  //     "purchasePrice": 2.4,
  //     "minQuantity": 12,
  //     "regionId": "-K_B1FCXvwC9mm2lQJnJ",
  //     "selectedDay": "Tuesday, 25 Jun  2019",
  //     "sellingPrice": 5.31,
  //     "timestamp": 1557335101093,
  //     "trackingId": "jxb9m9to187",
  //     "unitQuantity": "dz",
  //     "orderQuantity": 15
  //   },
  //   {
  //     "_id": "5d12580ffb6fc00e79b02e2f",
  //     "archived": false,
  //     "boxSize": 1,
  //     "category": "Frozen,Whole,Oysters",
  //     "cutoff": 18,
  //     "deliveryDays": {
  //       "friday": true,
  //       "monday": true,
  //       "saturday": true,
  //       "thursday": true,
  //       "tuesday": true,
  //       "wednesday": true
  //     },
  //     "description": "Sockeye salmon are distinguished by their bright red and rich fillets, which is also what makes them prized by sushi chefs. These salmon hatch in fresh water, spend part of their life feeding in the ocean and then “run” back to their natal rivers to spawn and die. \n\nSockeye have a bright blue or bluish green back and silver belly. Upon returning to fresh water, their skin turns bright red with light green heads. They are a muscular fish with large glistening scales. The sockeye’s oily richness and firm flesh make it perfect for grilling.  Our whole Salmon are 6-9lbs per fish.",
  //     "fisherId": "imYzcK2Y12X1du9Da2k7ygO4FV81",
  //     "hidden": true,
  //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/duckr-b8e76.appspot.com/o/products%2F-LeNOwu63tK5JAEl2dFT?alt=media&token=c9a60b89-20cb-4e77-b7a1-477bc0d0ea9f",
  //     "leadTime": 5,
  //     "name": "Oysters, Royal Miyagi (Live)",
  //     "productId": "-LeNOwu63tK5JAEl2rJX",
  //     "purchasePrice": 2.49,
  //     "minQuantity": 10,
  //     "regionId": "-K_B1FCXvwC9mm2lQJnJ",
  //     "selectedDay": "Tuesday, 25 Jun  2019",
  //     "sellingPrice": 9.14,
  //     "timestamp": 1557335101093,
  //     "trackingId": "jxb9m9to187",
  //     "unitQuantity": "lb",
  //     "orderQuantity": 20
  //   },
  //   {
  //     "_id": "5d1259bdfb6fc00e79b02fb0",
  //     "archived": false,
  //     "boxSize": 10,
  //     "category": "Frozen,Whole,Shrimp",
  //     "cutoff": 18,
  //     "deliveryDays": {
  //       "friday": true,
  //       "monday": true,
  //       "saturday": true,
  //       "thursday": true,
  //       "tuesday": true,
  //       "wednesday": true
  //     },
  //     "description": "Sockeye salmon are distinguished by their bright red and rich fillets, which is also what makes them prized by sushi chefs. These salmon hatch in fresh water, spend part of their life feeding in the ocean and then “run” back to their natal rivers to spawn and die. \n\nSockeye have a bright blue or bluish green back and silver belly. Upon returning to fresh water, their skin turns bright red with light green heads. They are a muscular fish with large glistening scales. The sockeye’s oily richness and firm flesh make it perfect for grilling.  Our whole Salmon are 6-9lbs per fish.",
  //     "fisherId": "imYzcK2Y12X1du9Da2k7ygO4FV83",
  //     "hidden": false,
  //     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/duckr-b8e76.appspot.com/o/products%2F-LeNOwu63tK5JAEl2dFT?alt=media&token=c9a60b89-20cb-4e77-b7a1-477bc0d0ea9f",
  //     "leadTime": 2,
  //     "name": "Shrimp, Argentine Red (EZ Peel • 16/20)",
  //     "productId": "-LeNOwu63tK5JAEl2eFX",
  //     "purchasePrice": 4.99,
  //     "minQuantity": 100,
  //     "regionId": "-K_B1FCXvwC9mm2lQJnJ",
  //     "selectedDay": "Tuesday, 25 Jun  2019",
  //     "sellingPrice": 10.33,
  //     "timestamp": 1557335101093,
  //     "trackingId": "jxb9m9to187",
  //     "unitQuantity": "case",
  //     "orderQuantity": 120
  //   }
  // ]
  ngOnInit() {
    this.productService.productList$
    .subscribe(results => {
      this.products = results.body;
    })
  }
  generateOrderList(){
    this.selectedProducts = this.products
    .filter((product) => 
    { if(product['selected'] === true)
      return product;
  });
    this.productService.setOrderGuideToLocalStorage(this.selectedProducts);
    this.closeModal();
  }
  closeModal(){
    this.modalService.close();
  }

}
