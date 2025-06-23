import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MenuBarComponent } from "./components/menu-bar/menu-bar";



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, MenuBarComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Angular-Blog';
}
