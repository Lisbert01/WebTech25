import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from './nav/nav';
import { ZitatHinzufuegen } from './zitat-hinzufuegen/zitat-hinzufuegen';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Nav, ZitatHinzufuegen],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = 'zitate';
}
