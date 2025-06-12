import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Ar } from './ar/ar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Ar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'ar-app';
}
