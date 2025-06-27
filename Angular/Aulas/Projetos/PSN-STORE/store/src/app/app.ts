import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from "./components/menu/menu";
import { Home } from "./pages/home/home";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Menu, Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'store';
}
