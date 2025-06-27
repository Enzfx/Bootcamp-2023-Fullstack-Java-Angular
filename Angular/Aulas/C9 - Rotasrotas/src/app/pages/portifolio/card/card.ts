import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card implements OnInit {
constructor(
  private activeRoute: ActivatedRoute,
  private navegador: Router

) { 
  this.activeRoute.params.subscribe(
    res => console.log(res)
  )
  this.activeRoute.firstChild?.params.subscribe(
    res => console.log(res)
  )
  this.activeRoute.queryParams.subscribe(
    res => console.log(res)
  )
}


ngOnInit(): void {
  // setInterval(() => {
  //   this.navegador.navigate(['/'])
  //   }, 5000)
  }
}
