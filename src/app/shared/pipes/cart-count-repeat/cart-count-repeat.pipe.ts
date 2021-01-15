import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cartCountRepeat'
})
export class CartCountRepeatPipe implements PipeTransform {

  transform(productSelected: any, products: any[]): any {
    return products.filter((product) => productSelected.id === product.id).length;
   }
 

}
