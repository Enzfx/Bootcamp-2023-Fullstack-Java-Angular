// Angular
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Components
import { Card } from './card/card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Card, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})


export class App {
  protected title = 'diretivas-proj';
}
