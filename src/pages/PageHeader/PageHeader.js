import React from 'react';
import './PageHeader.css'


const PageHeader = ({text}) => {
  return (
    <div className="pagetitle">
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">
              <i className="bi bi-house-door"></i>
            </a>
          </li>
          <li className="breadcrumb-item active">Dashboard</li>
        </ol>
      </nav>
    </div>
  );
}

export default PageHeader;
