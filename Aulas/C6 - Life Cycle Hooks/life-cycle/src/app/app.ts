import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Title } from "./title/title";
import { CheckSample } from './check-sample/check-sample';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, Title, CheckSample],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'life-cycle';
  isAliveCheckSample: boolean = true;
  disposeCheckSample(): void {
    this.isAliveCheckSample = false;
  }
}
