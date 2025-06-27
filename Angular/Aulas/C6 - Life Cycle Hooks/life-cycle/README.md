<div align="center">

![Angular Logo](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

# 🔄 C6 - Life Cycle Hooks

**Explorando o Ciclo de Vida dos Componentes Angular**

</div>

## 📋 Sobre o Projeto

Este projeto faz parte da **Aula 6** do **Bootcamp Fullstack Java + Angular** da [DIO](https://dio.me), explorando os **Life Cycle Hooks** do Angular - métodos especiais que são chamados em momentos específicos da vida de um componente.

## 🎯 Objetivos de Aprendizado

- ✅ Compreender o ciclo de vida dos componentes Angular
- ✅ Implementar e utilizar diferentes hooks de ciclo de vida
- ✅ Otimizar performance através dos hooks apropriados
- ✅ Gerenciar recursos e subscriptions adequadamente
- ✅ Aplicar boas práticas de cleanup

## 🔄 Life Cycle Hooks Abordados

### 1. **ngOnInit** 🚀
```typescript
ngOnInit(): void {
  console.log('Componente inicializado');
  this.loadData();
}
```
- Executado após a inicialização das propriedades
- Lugar ideal para chamadas de API
- Configurações iniciais

### 2. **ngOnChanges** 🔄
```typescript
ngOnChanges(changes: SimpleChanges): void {
  console.log('Propriedades alteradas:', changes);
  if (changes['inputValue']) {
    this.processNewValue();
  }
}
```
- Detecta mudanças em propriedades `@Input()`
- Executado antes do `ngOnInit`
- Útil para reagir a mudanças externas

### 3. **ngDoCheck** 🔍
```typescript
ngDoCheck(): void {
  console.log('Verificação de mudanças');
  // Detecção customizada de mudanças
}
```
- Executado a cada ciclo de detecção
- Para lógica customizada de detecção
- **Cuidado:** pode impactar performance

### 4. **ngAfterContentInit** 📥
```typescript
ngAfterContentInit(): void {
  console.log('Conteúdo projetado inicializado');
  // Acesso ao ng-content
}
```
- Após inicialização do conteúdo projetado
- Trabalha com `<ng-content>`

### 5. **ngAfterContentChecked** ✅
```typescript
ngAfterContentChecked(): void {
  console.log('Conteúdo verificado');
}
```
- Após cada verificação do conteúdo projetado

### 6. **ngAfterViewInit** 👁️
```typescript
ngAfterViewInit(): void {
  console.log('View inicializada');
  // Acesso seguro a ViewChild/ElementRef
}
```
- Após inicialização da view do componente
- Acesso a `@ViewChild` e `ElementRef`

### 7. **ngAfterViewChecked** 🔄
```typescript
ngAfterViewChecked(): void {
  console.log('View verificada');
}
```
- Após cada verificação da view

### 8. **ngOnDestroy** 🗑️
```typescript
ngOnDestroy(): void {
  console.log('Componente destruído');
  this.subscription.unsubscribe();
}
```
- Cleanup antes da destruição
- Cancelar subscriptions
- Liberar recursos

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── components/
│   │   ├── lifecycle-demo/        # Demonstração completa
│   │   ├── parent-component/      # Componente pai
│   │   ├── child-component/       # Componente filho
│   │   └── counter/               # Exemplo com ngOnChanges
│   ├── services/
│   │   └── data.service.ts        # Service para demonstração
│   ├── app.component.ts           # Componente raiz
│   └── app.config.ts              # Configurações
├── styles.css                     # Estilos globais
└── main.ts                        # Bootstrapping
```

## 🧪 Exemplos Práticos

### Componente Completo com Todos os Hooks
```typescript
@Component({
  selector: 'app-lifecycle-demo',
  template: `
    <div>
      <h2>Life Cycle Demo</h2>
      <p>Valor: {{ inputValue }}</p>
      <div #viewChild>View Child Element</div>
    </div>
  `
})
export class LifecycleDemoComponent implements 
  OnInit, OnChanges, DoCheck, AfterContentInit, 
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  
  @Input() inputValue: string = '';
  @ViewChild('viewChild', { static: false }) viewChild!: ElementRef;
  
  private subscription: Subscription = new Subscription();
  
  constructor() {
    console.log('🏗️ Constructor chamado');
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log('🔄 ngOnChanges:', changes);
  }
  
  ngOnInit(): void {
    console.log('🚀 ngOnInit');
    this.subscription.add(
      this.dataService.getData().subscribe(data => {
        console.log('📡 Dados recebidos:', data);
      })
    );
  }
  
  ngDoCheck(): void {
    console.log('🔍 ngDoCheck');
  }
  
  ngAfterContentInit(): void {
    console.log('📥 ngAfterContentInit');
  }
  
  ngAfterContentChecked(): void {
    console.log('✅ ngAfterContentChecked');
  }
  
  ngAfterViewInit(): void {
    console.log('👁️ ngAfterViewInit');
    console.log('ViewChild:', this.viewChild.nativeElement);
  }
  
  ngAfterViewChecked(): void {
    console.log('🔄 ngAfterViewChecked');
  }
  
  ngOnDestroy(): void {
    console.log('🗑️ ngOnDestroy - Cleanup');
    this.subscription.unsubscribe();
  }
}
```

### Gerenciamento de Subscriptions
```typescript
@Component({
  selector: 'app-subscription-demo'
})
export class SubscriptionDemoComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  
  ngOnInit(): void {
    this.dataService.getData()
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => {
        console.log('Dados:', data);
      });
  }
  
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
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
   cd "Angular/Aulas/C6 - Life Cycle Hooks/life-cycle"
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

## 📊 Ordem de Execução dos Hooks

```
1. 🏗️ Constructor
2. 🔄 ngOnChanges (se houver @Input)
3. 🚀 ngOnInit
4. 🔍 ngDoCheck
5. 📥 ngAfterContentInit
6. ✅ ngAfterContentChecked
7. 👁️ ngAfterViewInit
8. 🔄 ngAfterViewChecked
9. 🔄 ngDoCheck + ngAfterContentChecked + ngAfterViewChecked (a cada ciclo)
10. 🗑️ ngOnDestroy (na destruição)
```

## ⚡ Boas Práticas

### 1. **Performance**
```typescript
// ❌ Evite operações pesadas no ngDoCheck
ngDoCheck(): void {
  this.heavyComputation(); // Evitar!
}

// ✅ Use OnPush strategy quando possível
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush
})
```

### 2. **Memory Leaks**
```typescript
// ✅ Sempre limpe subscriptions
ngOnDestroy(): void {
  this.subscription.unsubscribe();
  this.destroy$.next();
  this.destroy$.complete();
}
```

### 3. **ViewChild Access**
```typescript
// ✅ Acesse ViewChild apenas após ngAfterViewInit
ngAfterViewInit(): void {
  this.viewChild.nativeElement.focus();
}
```

## 🔧 Scripts Disponíveis

```bash
ng serve                 # Servidor de desenvolvimento
ng build                # Build de produção
ng test                 # Testes unitários
ng lint                 # Análise de código
```

## 📈 Próximos Passos

- [ ] Change Detection Strategy
- [ ] OnPush vs Default
- [ ] Async Pipe benefits
- [ ] Performance optimization
- [ ] Testing lifecycle hooks

## 📖 Recursos Adicionais

- [📚 Angular Lifecycle Hooks](https://angular.io/guide/lifecycle-hooks)
- [⚡ Change Detection](https://angular.io/guide/change-detection)
- [🧪 Testing Components](https://angular.io/guide/testing-components-scenarios)

## 📞 Contato

- **GitHub**: [Seu GitHub](https://github.com/seu-usuario)
- **LinkedIn**: [Seu LinkedIn](https://linkedin.com/in/seu-perfil)

---

<div align="center">
  <p>⭐ Dominando o ciclo de vida dos componentes!</p>
  <p>Desenvolvido como parte do Bootcamp DIO</p>
</div>
