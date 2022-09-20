import React from 'react';
import './Package.css'
import { Link } from "react-router-dom";
const Package = ({singlepPackage }) => {
    const { _id, name, price, short_description, img ,item1,item2,item3} = singlepPackage;
    return (
        <div className="col mb-4 " id="packages">
      <div className="card h-100 shadow-lg gray mb-5 bg-body rounded">
        <img
          src={img}
          className="card-img-top  rounded"
          alt="..."
          height="450"
        />
        <div className="card-body p-3">
          <h2 className="card-title Bold text-danger text-center mb-2">{name}</h2>
          <p className="card-text text-justify ">{short_description}</p>
          
        
        </div>
        <div className=" text-center">
          <small className="text-muted">
            <h4 className="text-primary mt-1 mb-5">Price: {price}</h4>
            <Link to={`/placeOrder/${_id}`}>
              <button className="btn btn-danger mb-3"> <i className="fas fa-shopping-cart"></i> Book Package </button>
            </Link>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Package;
