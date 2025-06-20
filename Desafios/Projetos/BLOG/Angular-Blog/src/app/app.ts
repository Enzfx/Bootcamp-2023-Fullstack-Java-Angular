import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Home } from "./pages/home/home";



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Angular-Blog';
}
