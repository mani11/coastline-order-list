import { Pipe, PipeTransform } from '@angular/core';
import { AppStateService } from '../service/app-state.service'

@Pipe({
  name: 'productList'
})
export class ProductListPipe implements PipeTransform {

  constructor(private appState: AppStateService) { }

  transform(values: any[], ...args: any[]): any {
    debugger;

    var itemsInLocalStorage = this.appState.getFromLocalStorage()
    if (!values) {
      return [];
    }
    else {
      var uniqueResultOne = values.filter(obj => {
        return !itemsInLocalStorage.some(obj2 => {
          return obj['_id'] == obj2['_id'];
        });
      });

      return uniqueResultOne;
    }

  }

}

