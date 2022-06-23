import React, { useState } from 'react';

function Tour({ id, name, info, price, image, removeTour }) {
  return (
    <article className='single-tour'>
      <img src={image} alt={name} />
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>{price}</h4>
        </div>
        <p>{info}</p>
        <button onClick={() => removeTour(id)} className='delete-btn'>
          not interested
        </button>
      </footer>
    </article>
  );
}

export default Tour;
