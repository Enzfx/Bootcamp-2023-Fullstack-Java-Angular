import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { App } from './app/app';


bootstrapApplication(App, {
  providers: [
    provideHttpClient()
  ]
}).catch(err => console.error('Erro ao inicializar a aplicaçao', err));
