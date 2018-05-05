import React from 'react';

import './Plate.css';

const Plate = ({active}) => {

  return(
    <div className={`${active ? '' : 'active'} plate`}></div>
  )
}

export default Plate;