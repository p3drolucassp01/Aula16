import React from 'react';
import PropTypes from 'prop-types';
import './Task.css'; // Adicionei uma importação para estilos específicos do componente

function Task({ title, description }) {
  return (
    <div className="task-container">
      <h3 className="task-title">{title}</h3>
      <p className="task-description">{description}</p>
    </div>
  );
}

Task.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Task;
