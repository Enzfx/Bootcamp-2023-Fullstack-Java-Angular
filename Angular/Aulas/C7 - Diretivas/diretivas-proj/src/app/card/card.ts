import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card',
  imports: [FormsModule, CommonModule],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card implements OnInit {
  
  item: string = '';
  lista:string[] = [];
  isEnableBlock: boolean = false;

  adicionarLista(){
    this.lista.push(this.item)
  }

  ngOnInit() {
    // Initialization logic can go here
  }

}
