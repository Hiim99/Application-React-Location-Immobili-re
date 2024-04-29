import React from 'react';
import './Error.scss';

const Error = () => {
    return (
      <div>
         <h1 className='error'>404</h1>
         <h2 className='error-text'>Oups! La page que vous demandez n'existe pas </h2>
         <h3>Retournez sur la page d'acceuil</h3>
      </div>
    );
  }

  export default Error;