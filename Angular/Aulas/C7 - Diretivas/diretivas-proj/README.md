<div align="center">

![Angular Logo](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

# 🎯 C7 - Diretivas Angular

**Explorando Diretivas: Estruturais, de Atributo e Customizadas**

</div>

## 📋 Sobre o Projeto

Este projeto faz parte da **Aula 7** do **Bootcamp Fullstack Java + Angular** da [DIO](https://dio.me), explorando o poder das **Diretivas** no Angular - instruções especiais que estendem o comportamento de elementos HTML.

## 🎯 Objetivos de Aprendizado

- ✅ Compreender os tipos de diretivas no Angular
- ✅ Utilizar diretivas estruturais (*ngIf, *ngFor, *ngSwitch)
- ✅ Aplicar diretivas de atributo (ngClass, ngStyle)
- ✅ Criar diretivas customizadas
- ✅ Implementar lógica avançada com diretivas

## 📚 Tipos de Diretivas

### 1. 🏗️ **Diretivas Estruturais**
Modificam a estrutura do DOM adicionando, removendo ou manipulando elementos.

#### *ngIf - Renderização Condicional
```html
<!-- Sintaxe básica -->
<div *ngIf="isVisible">Conteúdo visível</div>

<!-- Com else -->
<div *ngIf="user; else noUser">
  Bem-vindo, {{ user.name }}!
</div>
<ng-template #noUser>
  <p>Usuário não encontrado</p>
</ng-template>

<!-- Com then/else -->
<div *ngIf="isLoading; then loading; else content"></div>
<ng-template #loading>Carregando...</ng-template>
<ng-template #content>Conteúdo carregado!</ng-template>
```

#### *ngFor - Iteração de Listas
```html
<!-- Sintaxe básica -->
<li *ngFor="let item of items">{{ item.name }}</li>

<!-- Com index e propriedades especiais -->
<li *ngFor="let item of items; let i = index; let isFirst = first; let isLast = last">
  {{ i + 1 }}. {{ item.name }}
  <span *ngIf="isFirst">(Primeiro)</span>
  <span *ngIf="isLast">(Último)</span>
</li>

<!-- Com trackBy para performance -->
<li *ngFor="let item of items; trackBy: trackByFn">
  {{ item.name }}
</li>
```

#### *ngSwitch - Múltiplas Condições
```html
<div [ngSwitch]="userRole">
  <p *ngSwitchCase="'admin'">Painel do Administrador</p>
  <p *ngSwitchCase="'user'">Área do Usuário</p>
  <p *ngSwitchCase="'guest'">Área do Visitante</p>
  <p *ngSwitchDefault>Acesso Negado</p>
</div>
```

### 2. 🎨 **Diretivas de Atributo**
Modificam a aparência ou comportamento de elementos existentes.

#### ngClass - Classes Dinâmicas
```html
<!-- Objeto -->
<div [ngClass]="{
  'active': isActive,
  'disabled': isDisabled,
  'highlight': isHighlighted
}">Elemento</div>

<!-- Array -->
<div [ngClass]="['class1', 'class2', conditionalClass]">Elemento</div>

<!-- String -->
<div [ngClass]="'class1 class2'">Elemento</div>

<!-- Método -->
<div [ngClass]="getClasses()">Elemento</div>
```

#### ngStyle - Estilos Dinâmicos
```html
<!-- Objeto -->
<div [ngStyle]="{
  'color': textColor,
  'font-size': fontSize + 'px',
  'background-color': isHighlighted ? 'yellow' : 'transparent'
}">Texto estilizado</div>

<!-- Propriedade única -->
<div [style.color]="textColor">Texto colorido</div>
<div [style.font-size.px]="fontSize">Texto dimensionado</div>
```

### 3. 🔧 **Diretivas Customizadas**

#### Diretiva de Atributo Personalizada
```typescript
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() appHighlight: string = 'yellow';
  @Input() defaultColor: string = 'transparent';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHighlight);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(this.defaultColor);
  }

  private highlight(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
  }
}
```

#### Uso da Diretiva Customizada
```html
<p appHighlight="lightblue">Passe o mouse aqui!</p>
<p [appHighlight]="'lightgreen'" defaultColor="white">Outro exemplo</p>
```

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── directives/                # Diretivas customizadas
│   │   ├── highlight.directive.ts # Diretiva de destaque
│   │   ├── click-stop.directive.ts# Parar propagação
│   │   └── auto-focus.directive.ts# Auto focus
│   ├── components/
│   │   ├── structural-demo/       # Demo diretivas estruturais
│   │   ├── attribute-demo/        # Demo diretivas de atributo
│   │   └── custom-demo/           # Demo diretivas customizadas
│   ├── app.component.ts           # Componente raiz
│   └── app.config.ts              # Configurações
├── styles.css                     # Estilos globais
└── main.ts                        # Bootstrapping
```

## 🧪 Exemplos Práticos

### Componente com Diretivas Estruturais
```typescript
@Component({
  selector: 'app-structural-demo',
  template: `
    <div>
      <h2>Lista de Usuários</h2>
      
      <!-- ngIf -->
      <div *ngIf="isLoading; else usersList">
        Carregando usuários...
      </div>
      
      <ng-template #usersList>
        <!-- ngFor -->
        <div *ngFor="let user of users; let i = index; trackBy: trackByUserId">
          <div class="user-card">
            <h3>{{ user.name }}</h3>
            <p>{{ user.email }}</p>
            
            <!-- ngSwitch -->
            <span [ngSwitch]="user.status">
              <span *ngSwitchCase="'active'" class="status-active">Ativo</span>
              <span *ngSwitchCase="'inactive'" class="status-inactive">Inativo</span>
              <span *ngSwitchDefault class="status-unknown">Desconhecido</span>
            </span>
          </div>
        </div>
      </ng-template>
      
      <!-- Mensagem quando não há usuários -->
      <div *ngIf="users.length === 0 && !isLoading">
        Nenhum usuário encontrado.
      </div>
    </div>
  `
})
export class StructuralDemoComponent {
  users: User[] = [];
  isLoading = true;
  
  trackByUserId(index: number, user: User): number {
    return user.id;
  }
}
```

### Componente com Diretivas de Atributo
```typescript
@Component({
  selector: 'app-attribute-demo',
  template: `
    <div>
      <h2>Demonstração de Estilos Dinâmicos</h2>
      
      <!-- ngClass -->
      <div [ngClass]="{
        'card': true,
        'card-highlighted': isHighlighted,
        'card-disabled': isDisabled
      }">
        <h3>Card Dinâmico</h3>
        <p>Estado atual: {{ getCurrentState() }}</p>
      </div>
      
      <!-- ngStyle -->
      <div [ngStyle]="{
        'background-color': backgroundColor,
        'color': textColor,
        'padding': padding + 'px',
        'border-radius': borderRadius + 'px'
      }">
        <p>Elemento com estilos dinâmicos</p>
      </div>
      
      <!-- Controles -->
      <div class="controls">
        <button (click)="toggleHighlight()">Toggle Highlight</button>
        <button (click)="toggleDisabled()">Toggle Disabled</button>
        <input type="color" [(ngModel)]="backgroundColor" placeholder="Cor de fundo">
        <input type="color" [(ngModel)]="textColor" placeholder="Cor do texto">
      </div>
    </div>
  `
})
export class AttributeDemoComponent {
  isHighlighted = false;
  isDisabled = false;
  backgroundColor = '#f0f0f0';
  textColor = '#333333';
  padding = 20;
  borderRadius = 8;
  
  toggleHighlight() {
    this.isHighlighted = !this.isHighlighted;
  }
  
  toggleDisabled() {
    this.isDisabled = !this.isDisabled;
  }
  
  getCurrentState(): string {
    if (this.isDisabled) return 'Desabilitado';
    if (this.isHighlighted) return 'Destacado';
    return 'Normal';
  }
}
```

### Diretivas Customizadas Avançadas

#### Diretiva Click Outside
```typescript
@Directive({
  selector: '[appClickOutside]'
})
export class ClickOutsideDirective {
  @Output() clickOutside = new EventEmitter<void>();

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    if (!this.el.nativeElement.contains(event.target)) {
      this.clickOutside.emit();
    }
  }

  constructor(private el: ElementRef) {}
}
```

#### Diretiva Auto Focus
```typescript
@Directive({
  selector: '[appAutoFocus]'
})
export class AutoFocusDirective implements AfterViewInit {
  @Input() appAutoFocus: boolean = true;

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    if (this.appAutoFocus) {
      setTimeout(() => {
        this.el.nativeElement.focus();
      }, 0);
    }
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
   cd "Angular/Aulas/C7 - Diretivas/diretivas-proj"
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

## ⚡ Boas Práticas

### 1. **Performance com *ngFor**
```typescript
// ✅ Use trackBy para melhor performance
trackByFn(index: number, item: any): any {
  return item.id; // ou index se não houver id único
}
```

### 2. **Evitar Expressões Complexas**
```html
<!-- ❌ Evitar -->
<div *ngIf="users.filter(u => u.active).length > 0">

<!-- ✅ Preferir -->
<div *ngIf="hasActiveUsers">
```

### 3. **Diretivas Customizadas**
```typescript
// ✅ Use Renderer2 para manipulação de DOM
constructor(private renderer: Renderer2, private el: ElementRef) {}

private setStyle(property: string, value: string) {
  this.renderer.setStyle(this.el.nativeElement, property, value);
}
```

## 🔧 Scripts Disponíveis

```bash
ng serve                 # Servidor de desenvolvimento
ng build                # Build de produção
ng test                 # Testes unitários
ng lint                 # Análise de código

# Gerar diretiva
ng generate directive nome-da-diretiva
```

## 📈 Próximos Passos

- [ ] Diretivas com parâmetros múltiplos
- [ ] Testing de diretivas customizadas
- [ ] Performance optimization
- [ ] Accessibility em diretivas
- [ ] Diretivas para formulários

## 📖 Recursos Adicionais

- [📚 Angular Directives](https://angular.io/guide/attribute-directives)
- [🏗️ Structural Directives](https://angular.io/guide/structural-directives)
- [🧪 Testing Directives](https://angular.io/guide/testing-attribute-directives)

## 📞 Contato

- **GitHub**: [Seu GitHub](https://github.com/seu-usuario)
- **LinkedIn**: [Seu LinkedIn](https://linkedin.com/in/seu-perfil)

---

<div align="center">
  <p>⭐ Dominando as diretivas do Angular!</p>
  <p>Desenvolvido como parte do Bootcamp DIO</p>
</div>
