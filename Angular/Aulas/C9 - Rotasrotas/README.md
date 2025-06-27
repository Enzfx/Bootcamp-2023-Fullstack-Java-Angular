<div align="center">

![Angular Logo](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

# 🛣️ C9 - Sistema de Rotas Angular

**Explorando Navegação e Roteamento no Angular**

</div>

## 📋 Sobre o Projeto

Este projeto faz parte da **Aula 9** do **Bootcamp Fullstack Java + Angular** da [DIO](https://dio.me), explorando o sistema de **Roteamento** do Angular - a navegação entre diferentes views/componentes em uma Single Page Application (SPA).

## 🎯 Objetivos de Aprendizado

- ✅ Configurar o sistema de rotas do Angular
- ✅ Implementar navegação entre componentes
- ✅ Trabalhar com parâmetros de rota
- ✅ Criar rotas aninhadas e guards de rota
- ✅ Aplicar lazy loading para otimização
- ✅ Gerenciar estado de navegação

## 🗺️ Conceitos de Roteamento

### 1. 📋 **Configuração Básica de Rotas**
```typescript
// app.routes.ts
export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: NotFoundComponent } // Wildcard route
];
```

### 2. 🔗 **Router Outlet**
```html
<!-- app.component.html -->
<nav>
  <a routerLink="/home" routerLinkActive="active">Home</a>
  <a routerLink="/about" routerLinkActive="active">Sobre</a>
  <a routerLink="/contact" routerLinkActive="active">Contato</a>
</nav>

<router-outlet></router-outlet>
```

### 3. 📝 **Parâmetros de Rota**
```typescript
// Configuração
{ path: 'user/:id', component: UserDetailComponent }
{ path: 'product/:id/:category', component: ProductComponent }

// Navegação programática
this.router.navigate(['/user', userId]);
this.router.navigate(['/product', productId, 'electronics']);

// Leitura de parâmetros
constructor(private route: ActivatedRoute) {}

ngOnInit() {
  const id = this.route.snapshot.paramMap.get('id');
  
  // Ou observável para mudanças dinâmicas
  this.route.paramMap.subscribe(params => {
    const id = params.get('id');
  });
}
```

### 4. 🔍 **Query Parameters**
```typescript
// Navegação com query params
this.router.navigate(['/products'], { 
  queryParams: { category: 'electronics', sort: 'price' } 
});

// Leitura de query params
this.route.queryParamMap.subscribe(params => {
  const category = params.get('category');
  const sort = params.get('sort');
});
```

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── components/
│   │   ├── home/                 # Página inicial
│   │   ├── about/                # Página sobre
│   │   ├── contact/              # Página contato
│   │   ├── user/                 # Lista de usuários
│   │   ├── user-detail/          # Detalhes do usuário
│   │   ├── products/             # Lista de produtos
│   │   ├── not-found/            # Página 404
│   │   └── navigation/           # Componente de navegação
│   ├── guards/                   # Route guards
│   │   ├── auth.guard.ts         # Guard de autenticação
│   │   └── can-deactivate.guard.ts # Guard de saída
│   ├── services/
│   │   ├── auth.service.ts       # Serviço de autenticação
│   │   └── data.service.ts       # Serviço de dados
│   ├── app.routes.ts             # Configuração de rotas
│   ├── app.component.ts          # Componente raiz
│   └── app.config.ts             # Configurações
├── styles.css                    # Estilos globais
└── main.ts                       # Bootstrapping
```

## 🧪 Exemplos Práticos

### Configuração Completa de Rotas
```typescript
// app.routes.ts
export const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/home', 
    pathMatch: 'full' 
  },
  { 
    path: 'home', 
    component: HomeComponent,
    title: 'Início'
  },
  { 
    path: 'about', 
    component: AboutComponent,
    title: 'Sobre Nós'
  },
  { 
    path: 'users', 
    component: UsersComponent,
    children: [
      { path: '', component: UserListComponent },
      { path: ':id', component: UserDetailComponent },
      { path: ':id/edit', component: UserEditComponent }
    ]
  },
  { 
    path: 'products', 
    component: ProductsComponent,
    canActivate: [AuthGuard],
    data: { requiresAuth: true }
  },
  { 
    path: 'admin', 
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  { 
    path: '**', 
    component: NotFoundComponent,
    title: 'Página não encontrada'
  }
];
```

### Componente com Navegação
```typescript
@Component({
  selector: 'app-navigation',
  template: `
    <nav class="navbar">
      <div class="nav-brand">
        <a routerLink="/">Minha App</a>
      </div>
      
      <ul class="nav-menu">
        <li>
          <a routerLink="/home" 
             routerLinkActive="active" 
             [routerLinkActiveOptions]="{ exact: true }">
            Home
          </a>
        </li>
        <li>
          <a routerLink="/about" routerLinkActive="active">
            Sobre
          </a>
        </li>
        <li>
          <a routerLink="/users" routerLinkActive="active">
            Usuários
          </a>
        </li>
        <li>
          <a routerLink="/products" 
             routerLinkActive="active"
             *ngIf="isAuthenticated">
            Produtos
          </a>
        </li>
      </ul>
      
      <div class="nav-actions">
        <button (click)="navigateToUser(123)">
          Ver Usuário 123
        </button>
        <button (click)="logout()" *ngIf="isAuthenticated">
          Sair
        </button>
      </div>
    </nav>
  `
})
export class NavigationComponent {
  isAuthenticated = false;
  
  constructor(
    private router: Router,
    private authService: AuthService
  ) {}
  
  navigateToUser(id: number) {
    this.router.navigate(['/users', id]);
  }
  
  logout() {
    this.authService.logout();
    this.router.navigate(['/home']);
  }
}
```

### Route Guards
```typescript
// auth.guard.ts
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> {
    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}

// can-deactivate.guard.ts
export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable()
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(component: CanComponentDeactivate): boolean | Observable<boolean> {
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}
```

### Componente com Parâmetros
```typescript
@Component({
  selector: 'app-user-detail',
  template: `
    <div class="user-detail" *ngIf="user">
      <h2>{{ user.name }}</h2>
      <p>Email: {{ user.email }}</p>
      <p>ID: {{ user.id }}</p>
      
      <div class="actions">
        <button (click)="editUser()">Editar</button>
        <button (click)="goBack()">Voltar</button>
      </div>
    </div>
    
    <div *ngIf="!user && !loading">
      Usuário não encontrado
    </div>
    
    <div *ngIf="loading">
      Carregando...
    </div>
  `
})
export class UserDetailComponent implements OnInit {
  user: User | null = null;
  loading = true;
  private userId: string | null = null;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private location: Location
  ) {}
  
  ngOnInit() {
    // Obter parâmetros da rota
    this.route.paramMap.subscribe(params => {
      this.userId = params.get('id');
      if (this.userId) {
        this.loadUser(this.userId);
      }
    });
  }
  
  loadUser(id: string) {
    this.loading = true;
    this.userService.getUser(id).subscribe(
      user => {
        this.user = user;
        this.loading = false;
      },
      error => {
        console.error('Erro ao carregar usuário:', error);
        this.loading = false;
      }
    );
  }
  
  editUser() {
    if (this.userId) {
      this.router.navigate(['/users', this.userId, 'edit']);
    }
  }
  
  goBack() {
    this.location.back();
  }
}
```

### Lazy Loading Module
```typescript
// admin.routes.ts
export const adminRoutes: Routes = [
  { path: '', component: AdminDashboardComponent },
  { path: 'users', component: AdminUsersComponent },
  { path: 'settings', component: AdminSettingsComponent }
];

// admin.module.ts
@NgModule({
  declarations: [
    AdminDashboardComponent,
    AdminUsersComponent,
    AdminSettingsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes)
  ]
})
export class AdminModule {}
```

## 🚀 Como Executar

### Pré-requisitos
- **Node.js** (versão 18 ou superior)
- **Angular CLI** (versão 20 ou superior)

### Instalação e Execução

1. **Navegue até o diretório:**
   ```bash
   cd "Angular/Aulas/C9 - Rotasrotas"
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Execute o servidor de desenvolvimento:**
   ```bash
   ng serve
   ```

4. **Acesse a aplicação:**
   ```
   http://localhost:4200
   ```

## 🧭 Navegação Programática

### Router Service
```typescript
constructor(private router: Router) {}

// Navegação simples
navigateToHome() {
  this.router.navigate(['/home']);
}

// Com parâmetros
navigateToUser(id: number) {
  this.router.navigate(['/users', id]);
}

// Com query parameters
searchProducts(category: string) {
  this.router.navigate(['/products'], {
    queryParams: { category, page: 1 }
  });
}

// Substituir no histórico
replaceRoute() {
  this.router.navigate(['/new-route'], { replaceUrl: true });
}
```

## ⚡ Boas Práticas

### 1. **Lazy Loading**
```typescript
// ✅ Carregamento sob demanda
{
  path: 'feature',
  loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule)
}
```

### 2. **Route Guards**
```typescript
// ✅ Proteger rotas sensíveis
{
  path: 'admin',
  component: AdminComponent,
  canActivate: [AuthGuard],
  canDeactivate: [CanDeactivateGuard]
}
```

### 3. **Preloading Strategy**
```typescript
// app.config.ts
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withPreloading(PreloadAllModules))
  ]
};
```

## 🔧 Scripts Disponíveis

```bash
ng serve                 # Servidor de desenvolvimento
ng build                # Build de produção
ng test                 # Testes unitários
ng lint                 # Análise de código

# Gerar componentes para rotas
ng generate component nome-componente
ng generate guard nome-guard
ng generate module nome-module --routing
```

## 📈 Próximos Passos

- [ ] Resolvers para pré-carregamento de dados
- [ ] Animações de transição entre rotas
- [ ] Estratégias avançadas de preloading
- [ ] Testes de roteamento
- [ ] SEO com Angular Universal

## 📖 Recursos Adicionais

- [📚 Angular Router](https://angular.io/guide/router)
- [🛡️ Route Guards](https://angular.io/guide/router-tutorial-toh#milestone-5-route-guards)
- [⚡ Lazy Loading](https://angular.io/guide/lazy-loading-ngmodules)

## 📞 Contato

- **GitHub**: [Seu GitHub](https://github.com/seu-usuario)
- **LinkedIn**: [Seu LinkedIn](https://linkedin.com/in/seu-perfil)

---

<div align="center">
  <p>⭐ Navegando com maestria no Angular!</p>
  <p>Desenvolvido como parte do Bootcamp DIO</p>
</div>
