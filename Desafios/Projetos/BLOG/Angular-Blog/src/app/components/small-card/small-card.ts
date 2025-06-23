import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  imports: [],
  templateUrl: './small-card.html',
  styleUrl: './small-card.css'
})
export class SmallCard implements OnInit {
  @Input()
  cardLink: string = '';
  @Input()
  photoCover: string = '';
  @Input()
  cardTitle: string = '';

  ngOnInit(): void {
    // Initialization logic can go here if needed
  }
}
