import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home/home').then(m => m.Home)
    },
    {
        path: 'content/:id',
        loadComponent: () => import('./pages/content/content').then(m => m.Content)
    }
];
