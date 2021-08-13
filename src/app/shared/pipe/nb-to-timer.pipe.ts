import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nbToTimer'
})
export class NbToTimerPipe implements PipeTransform {

  transform(value: number): string {
    let secondes = value % 60
    let minutes = Math.floor(value/60)
    let reponse = (minutes < 10 ? '0' : '') + minutes + ' minutes '+(secondes < 10 ? '0': '')+secondes+ ' secondes'
    return reponse;
  }

}
