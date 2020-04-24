import React from 'react';
import './breadcrumb.css';

function Breadcrumb(props) {
  return (
    <div className="breadcrumb">
      <h3>{props.currentPage}</h3>
    </div>
  );
}
export default Breadcrumb;
