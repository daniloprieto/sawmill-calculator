import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SawmillCalculatorRoutingModule } from './sawmill-calculator-routing.module';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [CalculatorComponent],
  imports: [
    CommonModule,
    FormsModule,
    SawmillCalculatorRoutingModule
  ],
})
export class SawmillCalculatorModule { }
