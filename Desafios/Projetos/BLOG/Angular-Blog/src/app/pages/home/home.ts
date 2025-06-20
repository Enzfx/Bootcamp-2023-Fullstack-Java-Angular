import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuTitle } from "../../components/menu-title/menu-title";
import { BigCard } from "../../components/big-card/big-card";
import { SmallCard } from "../../components/small-card/small-card";

@Component({
  selector: 'app-home',
  imports: [CommonModule, MenuTitle, BigCard, SmallCard],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
