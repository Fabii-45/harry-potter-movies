import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'budget',
  standalone: true,
})
export class BudgetPipe implements PipeTransform {
  transform(value: string | undefined): string {
    if (!value) {
      return '';
    }
    return `$${value} millions`;
  }
}
