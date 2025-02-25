import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
  standalone: true,
})
export class DurationPipe implements PipeTransform {
  transform(value: string): string {
    const totalMinutes: number = Number(value);
    if (!totalMinutes || totalMinutes < 0) return value.toString();

    const hours: number = Math.floor(totalMinutes / 60);
    const minutes: number = totalMinutes % 60;

    return `${hours}h ${minutes}min`;
  }
}
