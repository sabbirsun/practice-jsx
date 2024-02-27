import React from 'react';
import "./BlogCss/Card.css";

function Card(props) {
  return (
    <div className="container mt-5">
      <h2 className='mb-5'>Recent Post</h2>
      <div className="card">
        <img src={props.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  );
}

export default Card;
