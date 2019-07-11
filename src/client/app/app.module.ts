import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { ProductsService } from './service/products.service';
import { ModalService } from './service/modal.service'; 
import { ApiService } from './service/api.service';
import { AppStateService } from './service/app-state.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './views/product-list/product-list.component';
import { EditOrderGuideComponent } from './views/edit-order-guide/edit-order-guide.component';
import { OrderGuideComponent } from './views/order-guide/order-guide.component';
import { ProductListPipe } from './helper/product-list.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    EditOrderGuideComponent,
    OrderGuideComponent,
    ProductListPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModalModule,
    NgbAlertModule,
    FormsModule
  ],
  providers: [ProductsService,ApiService,AppStateService,ModalService,NgbActiveModal],
  bootstrap: [AppComponent],
  entryComponents:[ProductListComponent,EditOrderGuideComponent]
})
export class AppModule { }
