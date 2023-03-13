import React from 'react';
import './style.css';

const ToolCard = ({
  id, name, color, icon, link, onClick
}) => {

  return (
    <div style={{ backgroundColor: color }}onClick={onClick} className='card-wrapper'>
      <img className="card-icon" src={ icon } alt="" />
      <p className='card-name'>{ name }</p>
    </div>
  )
}

export default ToolCard;