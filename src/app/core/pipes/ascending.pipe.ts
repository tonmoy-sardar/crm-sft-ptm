/**
 * ascending depend upon field label on list
 * @params value, field name
 * @return List
 * @author Biswajit Manna
 * @date 15-02-2020
 */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ascending'
})
export class AscendingPipe implements PipeTransform {

  transform(value: any[], propertyName: number): any[] {
    if (propertyName)
      return value.sort((a: any, b: any) => a[propertyName] - b[propertyName].toString());
    else
      return value;
  }

}
