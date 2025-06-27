import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from "./shared/menu/menu";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Menu],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'C9 - Rotasrotas';
}
