import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Module2Component1Component } from './module2-component1/module2-component1.component';

@NgModule({
  declarations: [Module2Component1Component],
  imports: [CommonModule],
  exports: [Module2Component1Component],
})
export class ParentModule2Module {}
