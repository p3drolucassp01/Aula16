import React, { useState } from 'react';
import Task from './Task';
import './TaskContainer.css';

function TaskContainer() {
  const [tasks] = useState([
    { id: 1, title: 'Tarefa 1', description: 'Descrição da Tarefa 1' },
    { id: 2, title: 'Tarefa 2', description: 'Descrição da Tarefa 2' },
  ]);

  // Estado para controlar a visibilidade das tarefas
  const [isVisible, setIsVisible] = useState(true);

  // Função para alternar a visibilidade
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="task-container">
      <header className="task-header">
        <h2>Lista de Tarefas</h2>
        <p>Gerencie suas tarefas de forma organizada e eficiente.</p>
      </header>

      {/* Botão para ocultar/exibir tarefas */}
      <button onClick={toggleVisibility} className="toggle-button">
        {isVisible ? 'Ocultar Atividades' : 'Exibir Atividades'}
      </button>

      {/* Renderização condicional da lista de tarefas */}
      {isVisible && (
        <div className="task-list">
          {tasks.map((task) => (
            <Task key={task.id} title={task.title} description={task.description} />
          ))}
        </div>
      )}
    </div>
  );
}

export default TaskContainer;
