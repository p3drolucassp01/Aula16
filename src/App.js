import React from 'react';
import Header from './components/Header'; // Importação correta do Header
import TaskContainer from './components/TaskContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header /> {/* Adicionando o Header aqui */}
      <TaskContainer />
    </div>
  );
}

export default App;
