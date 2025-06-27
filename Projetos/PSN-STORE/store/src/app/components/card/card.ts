import { Component, Input } from '@angular/core';
import { CardLabel } from "./card-label/card-label";
import { CardPricing } from "./card-pricing/card-pricing";

@Component({
  selector: 'app-card',
  imports: [CardLabel, CardPricing],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {
@Input()
gameCover: string = "";
@Input()
gameLabel: string = "";
@Input()
gamePrice: string = "";
@Input()
gameType: string = "";


}
