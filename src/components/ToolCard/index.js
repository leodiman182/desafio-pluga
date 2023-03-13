import React from 'react';
import './style.css';

const ToolCard = ({
  id, name, color, icon, link
}) => {
  return (
    <div className='card-wrapper'>
      <img className="card-icon" src={ icon } alt="" />
      <p className='card-name'>{ name }</p>
    </div>
  )
}

export default ToolCard;