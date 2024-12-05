import React from 'react';
import Task from './Task';
import './TaskContainer.css';

function TaskContainer() {
  const tasks = [
    { id: 1, title: 'Tarefa 1', description: 'Descrição da Tarefa 1' },
    { id: 2, title: 'Tarefa 2', description: 'Descrição da Tarefa 2' },
  ];

  return (
    <div className="task-container">
      <header className="task-header">
        <h2>Lista de Tarefas</h2>
        <p>Gerencie suas tarefas de forma organizada e eficiente.</p>
      </header>
      <div className="task-list">
        {tasks.map((task) => (
          <Task key={task.id} title={task.title} description={task.description} />
        ))}
      </div>
    </div>
  );
}

export default TaskContainer;
