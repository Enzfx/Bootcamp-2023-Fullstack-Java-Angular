import { Component,Input, OnInit,OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [],
  templateUrl: './title.html',
  styleUrl: './title.css'
})
export class Title implements OnInit, OnChanges {

   @Input() nome: string = '';

  ngOnChanges(): void {
    console.log("OnChanges")
  }
  ngOnInit() {
    console.log('OnInit');
    }}
  {
}
