import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Head } from './head/head';
import { Header } from './header/header';
import { Nav } from './nav/nav';
import { Zitate } from './zitate/zitate';
import { Projekte } from './projekte/projekte';
import { Footer } from './footer/footer';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Head, Header, Nav, Zitate, Projekte, Footer ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('WebTechProjekt');
}
