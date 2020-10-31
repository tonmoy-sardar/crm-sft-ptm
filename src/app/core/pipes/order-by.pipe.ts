/**
 * orderBy depend upon field label on list
 * @params value, field name
 * @return List
 * @author Biswajit Manna
 * @date 15-02-2020
 */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(value: any[], propertyName: string): any[] {
    if (propertyName)
      return value.sort((a: any, b: any) => b[propertyName].localeCompare(a[propertyName]));
    else
      return value;
  }

}
