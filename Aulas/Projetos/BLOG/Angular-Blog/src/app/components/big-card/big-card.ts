import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-big-card',
  imports: [RouterModule],
  templateUrl: './big-card.html',
  styleUrls: ['./big-card.css']
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
  @Input()
  Id:string = "0";

  ngOnInit():void {
  }
}
