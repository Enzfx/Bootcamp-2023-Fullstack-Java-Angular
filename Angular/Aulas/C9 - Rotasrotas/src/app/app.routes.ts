import { Routes } from '@angular/router';
import { Title } from './pages/index/title/title';
import { Card } from './pages/portifolio/card/card';

export const routes: Routes = [
    {
        path: '', component: Title, pathMatch: 'full'
    },
    {
        path: 'index', component: Title, pathMatch: 'full'
    },
    {
        path: 'portifolio', component: Card,
        children: [{path: ':id', component: Card}],
    },
    {
        path: '**', redirectTo: ''
    }
];
