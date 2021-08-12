import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToUsdPipe } from './pipe/tousd.pipe';
import { CurrencyConverterPipe } from './pipe/currency-converter.pipe';



@NgModule({
  declarations: [
    ToUsdPipe,
    CurrencyConverterPipe
  ],
  imports: [
    CommonModule
  ],
  exports : [
    ToUsdPipe, 
    CurrencyConverterPipe
  ]
})
export class SharedModule { }
