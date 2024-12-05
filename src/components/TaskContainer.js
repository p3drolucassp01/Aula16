import React from 'react';
import Task from './Task';

function TaskContainer() {
  const tasks = [
    { id: 1, title: 'Tarefa 1: Seção para Exibir as Tarefas', description: 'Descrição da Tarefa 1: A seção exibe dinamicamente uma lista de tarefas, mostrando título e descrição de cada uma, permitindo ao usuário visualizar suas atividades de forma organizada.' },
    { id: 2, title: 'Tarefa 2: Cabeçalho para o Título do Projeto', description: 'Descrição da Tarefa 2:O cabeçalho exibe o título "Task Manager" no topo, identificando claramente o propósito da aplicação como um gerenciador de tarefas.' },
  ];

  return (
    <div>
      {tasks.map((task) => (
        <Task key={task.id} title={task.title} description={task.description} />
      ))}
    </div>
  );
}

export default TaskContainer;
