import React from 'react';
import './style.css';

const Marker = props => {
    const {name} = props;
    return (
      <div className="marker"
        style={{ cursor: 'pointer'}}
        title={name}
      >&#10049;</div>
    );
  };

export default Marker;