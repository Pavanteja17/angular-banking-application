import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moneyConverter'
})
export class MoneyConverterPipe implements PipeTransform {

  transform(value: number): string {
    return value.toLocaleString('en-IN');
  }

}
