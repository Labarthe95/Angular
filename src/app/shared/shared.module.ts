import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToUsdPipe } from './pipe/tousd.pipe';
import { CurrencyConverterPipe } from './pipe/currency-converter.pipe';
import { SurlignerDirective } from './directive/surligner.directive';



@NgModule({
  declarations: [
    ToUsdPipe,
    CurrencyConverterPipe,
    SurlignerDirective
  ],
  imports: [
    CommonModule
  ],
  exports : [
    ToUsdPipe, 
    CurrencyConverterPipe,
    SurlignerDirective
  ]
})
export class SharedModule { }
