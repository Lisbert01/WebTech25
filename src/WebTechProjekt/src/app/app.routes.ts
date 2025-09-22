import { Routes } from '@angular/router';
import { Head } from './head/head';
import { Header} from './header/header';
import { Zitate} from './zitate/zitate';
import { Projekte} from './projekte/projekte';
import { Footer } from './footer/footer';

export const routes: Routes = [
    { path: "head", component: Head },
    { path: "header", component: Header},
    { path: "zitate", component: Zitate },
    { path: "zitate/:id", component: Zitate },
    { path: "projekte", component: Projekte },
    { path: "footer", component: Footer}
];
