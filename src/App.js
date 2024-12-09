import React, { useState } from 'react';
import Header from './components/Header'; // Importação correta do Header
import TaskContainer from './components/TaskContainer';
import './App.css';

function App() {
  const [showTasks, setShowTasks] = useState(true); // Estado para controlar a visibilidade das tarefas

  // Função para alternar a visibilidade
  const toggleTasks = () => {
    setShowTasks(!showTasks);
  };

  return (
    <div className="App">
      <Header /> {/* Cabeçalho */}
      {/* Botão de Ocultar/Exibir */}
      <button onClick={toggleTasks} className="toggle-tasks-button">
        {showTasks ? 'Ocultar Tarefas' : 'Exibir Tarefas'}
      </button>
      {/* Renderização condicional das tarefas */}
      {showTasks && <TaskContainer />}
    </div>
  );
}

export default App;
