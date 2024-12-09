
# Exercício React Elements JSX - Task Manager

## Descrição

Adicionando botão funcional

## O que foi feito

### 1. Botão de Oculta e exibir


# Explicação

## 1. Gestão de Estado
No arquivo `App.js`, é utilizado o `useState` para criar uma variável de estado chamada `showTasks`, que inicialmente é `true`:

```jsx
const [showTasks, setShowTasks] = useState(true);
```

Essa variável define se o componente `TaskContainer` deve ser exibido ou não.

## 2. Alternância de Visibilidade
A função `toggleTasks` altera o estado de `showTasks`, invertendo o valor atual:

```jsx
const toggleTasks = () => {
  setShowTasks(!showTasks);
};
```

O botão para ocultar/exibir chama essa função ao ser clicado:

```jsx
<button onClick={toggleTasks} className="toggle-tasks-button">
  {showTasks ? 'Ocultar Tarefas' : 'Exibir Tarefas'}
</button>
```

O texto do botão muda dinamicamente dependendo do valor de `showTasks`.

## 3. Renderização Condicional
A renderização do componente `TaskContainer` só ocorre quando `showTasks` é `true`:

```jsx
{showTasks && <TaskContainer />}
```

## 4. Controle Interno no `TaskContainer`
Dentro de `TaskContainer`, um segundo nível de controle é implementado com o estado `isVisible`:

```jsx
const [isVisible, setIsVisible] = useState(true);
```

A função `toggleVisibility` funciona da mesma forma que `toggleTasks`, mas controla a visibilidade de uma lista específica de tarefas:

```jsx
const toggleVisibility = () => {
  setIsVisible(!isVisible);
};
```

## 5. Interação entre os Botões
No `TaskContainer`, o botão de ocultar/exibir tarefas é configurado com a mesma lógica de alternância:

```jsx
<button onClick={toggleVisibility} className="toggle-button">
  {isVisible ? 'Ocultar Atividades' : 'Exibir Atividades'}
</button>
```

A lista de tarefas (`tasks`) é renderizada apenas quando `isVisible` é `true`:

```jsx
{isVisible && (
  <div className="task-list">
    {tasks.map((task) => (
      <Task key={task.id} title={task.title} description={task.description} />
    ))}
  </div>
)}
```

# Antes

![alt text](<Captura de tela 2024-12-04 224251.png>)

# Depois

![alt text](<Captura de tela 2024-12-08 210723.png>)