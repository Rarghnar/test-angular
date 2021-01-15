import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ExponentialPipe } from './pipes/exponential/exponential.pipe';
import { HighlightDirective } from './directives/hihglight/highlight.directive';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CartRepeatPipe } from './pipes/cart-repeat/cart-repeat.pipe';
import { CartCountRepeatPipe } from './pipes/cart-count-repeat/cart-count-repeat.pipe';



@NgModule({
  declarations: [
    ExponentialPipe,
    HighlightDirective,
    HeaderComponent,
    FooterComponent,
    CartRepeatPipe,
    CartCountRepeatPipe,

  ],
  exports: [
    ExponentialPipe,
    HighlightDirective,
    HeaderComponent,
    FooterComponent,
    CartRepeatPipe,
    CartCountRepeatPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
