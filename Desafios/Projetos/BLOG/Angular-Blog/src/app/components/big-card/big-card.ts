import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  imports: [],
  templateUrl: './big-card.html',
  styleUrl: './big-card.css'
})
export class BigCard implements OnInit {
  @Input()
  cardLink:string = '';
  @Input()
  photoCover:string ='';
  @Input()
  cardTitle:string = '';
  @Input()
  cardDescription:string = '';

  ngOnInit():void {
  }
}
