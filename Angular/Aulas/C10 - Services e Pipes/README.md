<div align="center">

![Angular Logo](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

# 🔧 C10 - Services e Pipes

**Explorando Services e Pipes no Angular - Injeção de Dependência e Transformação de Dados**

</div>

## 📋 Sobre o Projeto

Este projeto faz parte da **Aula 10** do **Bootcamp Fullstack Java + Angular** da [DIO](https://dio.me), focando em dois conceitos fundamentais do Angular:

### 🛠️ **Services**
- Injeção de dependência
- Compartilhamento de dados entre componentes
- Lógica de negócio centralizada
- Comunicação com APIs

### 🔄 **Pipes**
- Transformação de dados no template
- Pipes built-in do Angular
- Criação de pipes customizados
- Formatação e filtros

## 🎯 Objetivos de Aprendizado

- ✅ Criar e usar Services no Angular
- ✅ Implementar injeção de dependência
- ✅ Utilizar pipes para transformação de dados
- ✅ Desenvolver pipes customizados
- ✅ Aplicar boas práticas de arquitetura Angular

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── services/              # Services da aplicação
│   │   ├── data.service.ts    # Service para dados
│   │   └── user.service.ts    # Service de usuários
│   ├── pipes/                 # Pipes customizados
│   │   ├── custom.pipe.ts     # Pipe personalizado
│   │   └── currency.pipe.ts   # Pipe de moeda
│   ├── components/            # Componentes
│   │   ├── user-list/         # Lista de usuários
│   │   └── data-display/      # Exibição de dados
│   ├── app.component.ts       # Componente raiz
│   └── app.config.ts          # Configurações
├── styles.css                 # Estilos globais
└── main.ts                    # Bootstrapping
```

## 🛠️ Services Implementados

### 1. DataService
```typescript
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data: any[] = [];
  
  getData(): Observable<any[]> {
    return of(this.data);
  }
  
  addData(item: any): void {
    this.data.push(item);
  }
}
```

### 2. UserService
```typescript
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';
  
  constructor(private http: HttpClient) {}
  
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }
}
```

## 🔄 Pipes Desenvolvidos

### 1. Pipes Built-in Utilizados
```typescript
// No template
{{ user.name | uppercase }}
{{ user.email | lowercase }}
{{ product.price | currency:'BRL':'symbol':'1.2-2' }}
{{ today | date:'dd/MM/yyyy' }}
{{ users | json }}
```

### 2. Pipe Customizado
```typescript
@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {
  transform(value: string): string {
    return value.split('').reverse().join('');
  }
}
```

### 3. Pipe com Parâmetros
```typescript
@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit: number = 20): string {
    return value.length > limit ? 
           value.substring(0, limit) + '...' : 
           value;
  }
}
```

## 🚀 Como Executar

### Pré-requisitos
- **Node.js** (versão 18 ou superior)
- **Angular CLI** (versão 20 ou superior)

### Instalação e Execução

1. **Navegue até o diretório:**
   ```bash
   cd "Angular/Aulas/C10 - Services e Pipes"
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

## 📚 Conceitos Abordados

### Injeção de Dependência
```typescript
@Component({
  selector: 'app-user-list',
  template: `...`
})
export class UserListComponent {
  constructor(
    private userService: UserService,
    private dataService: DataService
  ) {}
}
```

### Providers e Singletons
```typescript
// app.config.ts
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    UserService, // Singleton service
  ]
};
```

### Async Pipe
```html
<div *ngFor="let user of users$ | async">
  {{ user.name | titlecase }}
  {{ user.email | lowercase }}
</div>
```

## 🧪 Funcionalidades Demonstradas

### 1. Lista de Usuários
- Consumo de API externa
- Exibição com pipes de formatação
- Loading states

### 2. Transformação de Dados
- Formatação de moeda
- Conversão de texto
- Filtros personalizados

### 3. Compartilhamento de Estado
- Services como store simples
- Comunicação entre componentes
- Observable patterns

## 🎨 Exemplos de Uso

### Service com Observable
```typescript
@Component({
  template: `
    <div *ngFor="let item of data$ | async">
      {{ item.name | titlecase }}
      {{ item.price | currency:'BRL' }}
    </div>
  `
})
export class ComponentExample {
  data$ = this.dataService.getData();
  
  constructor(private dataService: DataService) {}
}
```

### Pipe Chain
```html
<p>{{ text | lowercase | reverse | truncate:15 }}</p>
```

## 🔧 Scripts Disponíveis

```bash
# Desenvolvimento
ng serve                 # Servidor de desenvolvimento
ng build                # Build de produção
ng test                 # Testes unitários
ng lint                 # Análise de código

# Geração de código
ng generate service nome    # Criar service
ng generate pipe nome       # Criar pipe
ng generate component nome  # Criar component
```

## 📈 Próximos Passos

- [ ] HTTP Interceptors
- [ ] Estado global com NgRx
- [ ] Testes de Services
- [ ] Performance optimization
- [ ] Error handling patterns

## 📖 Recursos Adicionais

- [📚 Angular Services](https://angular.io/guide/architecture-services)
- [🔄 Angular Pipes](https://angular.io/guide/pipes)
- [💉 Dependency Injection](https://angular.io/guide/dependency-injection)

## 📞 Contato

- **GitHub**: [Seu GitHub](https://github.com/seu-usuario)
- **LinkedIn**: [Seu LinkedIn](https://linkedin.com/in/seu-perfil)

---

<div align="center">
  <p>⭐ Dominando a arquitetura do Angular!</p>
  <p>Desenvolvido como parte do Bootcamp DIO</p>
</div>
