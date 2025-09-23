import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from './nav/nav';
import { ZitatHinzufuegen } from './zitat-hinzufuegen/zitat-hinzufuegen';
import { ZitateSammlung } from './zitate-sammlung/zitate-sammlung';
import { Footer } from './footer/footer';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Nav, ZitatHinzufuegen, ZitateSammlung, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
