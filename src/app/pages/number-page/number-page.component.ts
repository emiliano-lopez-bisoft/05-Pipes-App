import { CurrencyPipe, DecimalPipe, PercentPipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-number-page',
  imports: [DecimalPipe, CurrencyPipe, PercentPipe],
  templateUrl: './number-page.component.html',
})
export default class NumberPageComponent {
  totalSales = signal(2_459_807.5567);
  percent = signal(0.4856);
}
