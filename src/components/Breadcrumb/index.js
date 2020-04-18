import React from 'react';
import './breadcrumb.css';

function Breadcrumb(props) {
  return (
    <div>
      <p>{props.currentPage}</p>
    </div>
  );
}
export default Breadcrumb;
