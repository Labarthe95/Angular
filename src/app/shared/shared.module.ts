import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToUsdPipe } from './pipe/tousd.pipe';
import { CurrencyConverterPipe } from './pipe/currency-converter.pipe';
import { SurlignerDirective } from './directive/surligner.directive';
import { NbToTimerPipe } from './pipe/nb-to-timer.pipe';



@NgModule({
  declarations: [
    ToUsdPipe,
    CurrencyConverterPipe,
    SurlignerDirective,
    NbToTimerPipe
  ],
  imports: [
    CommonModule
  ],
  exports : [
    ToUsdPipe, 
    CurrencyConverterPipe,
    SurlignerDirective, 
    NbToTimerPipe
  ]
})
export class SharedModule { }
