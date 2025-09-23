import { Routes } from '@angular/router';
import { Nav } from './nav/nav';
import { Home } from './home/home';
import { ZitatHinzufuegen } from './zitat-hinzufuegen/zitat-hinzufuegen';
import { ZitateSammlung } from './zitate-sammlung/zitate-sammlung';


export const routes: Routes = [
    { path: "nav", component: Nav },
    { path: "zitat-hinzufuegen", component: ZitatHinzufuegen },
    { path: "zitate-sammlung", component: ZitateSammlung },
    { path: "zitate-sammlung/:id", component: ZitateSammlung },
    //{ path: "login", component: LoginComponent },
    { path: "", component: Home},
    { path: "**", redirectTo: "" }
];


