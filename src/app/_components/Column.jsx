import React from 'react';

const Column = ({ month, value, height, selected, onClick }) => {
  return (
    <div className='column-container' onClick={() => onClick(month)}>
      <div className="price-tag" style={{ opacity: selected ? 1 : 0, visibility: selected ? 'visible' : 'hidden' }}>
        {value}
        <div className="tooltip-dots">
          <div className='dot'></div>
          <div className='dot'></div>
          <div className='dot'></div>
        </div>
      </div>
      <div className={`column ${selected ? 'selected' : ''}`} style={{ height: `${height}px` }}>
      </div>
      <p>
        {month}
      </p>
    </div>
  );
}

export default Column;