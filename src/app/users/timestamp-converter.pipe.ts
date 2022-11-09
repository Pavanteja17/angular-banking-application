import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timestampConverter'
})
export class TimestampConverterPipe implements PipeTransform {

  transform(timestamp: number): unknown {
    var todate=new Date(timestamp).getDate();
    var tomonth=new Date(timestamp).getMonth()+1;
    var toyear=new Date(timestamp).getFullYear();
    var original_date=tomonth+'/'+todate+'/'+toyear
    return original_date;
  }

}
