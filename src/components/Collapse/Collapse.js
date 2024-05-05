import React, { useState } from 'react';
import './Collapse.scss';

const Collapse = ({ classContent, title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse-container">
      <div className="collapse-header" onClick={toggleCollapse}>
        <h2 className="collapse-title">{title}</h2>
        <span className={`collapse-icon ${isOpen ? 'open' : ''}`}>&#9660;</span>
      </div>
      <div className={`collapse-content ${isOpen ? 'open' : ''} ${classContent ? classContent : ''}`}>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Collapse;
