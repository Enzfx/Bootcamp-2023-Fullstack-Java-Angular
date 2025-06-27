import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-label',
  imports: [],
  templateUrl: './card-label.html',
  styleUrl: './card-label.css'
})
export class CardLabel {
  @Input()
  gameLabel: string = "";

}
