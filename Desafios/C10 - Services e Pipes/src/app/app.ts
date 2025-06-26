import { Component, inject } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import { Card } from "./components/card/card";

@Component({
  selector: 'app-root',
  imports: [
     RouterOutlet,
     Card
    ],
  template: `
  <h1>Aula sobre Services</h1>
  <app-card></app-card>
  <router-outlet></router-outlet>`,
  styleUrl: './app.css'
})
export class App {
  // private http = inject(HttpClient);
  protected title = 'C10_Services_e_Pipes';
}
