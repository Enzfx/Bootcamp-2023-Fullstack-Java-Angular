import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-pricing',
  imports: [],
  templateUrl: './card-pricing.html',
  styleUrl: './card-pricing.css'
})
export class CardPricing {
@Input()
gameType: string = "";
@Input()
gamePrice: string = "";


}
