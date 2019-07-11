import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  constructor() { }

  setToLocalStorage(selectedProducts:any){
    localStorage.setItem('selectedProducts',JSON.stringify(selectedProducts));
  }
  getFromLocalStorage(){
    var items = JSON.parse(localStorage.getItem('selectedProducts'));
    return items==null?[]:items;
  }

 
}
