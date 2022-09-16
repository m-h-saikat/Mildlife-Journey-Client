import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AllPackage from "../../Assets/img/header-bg-1.png"

const AllPackages = () => {
    const [packages, setPackages] = useState([]);
    useEffect(() => {
      fetch(`https://mildlife-journey-server.vercel.app/packages`)
        .then((res) => res.json())
        .then((data) => setPackages(data));
    }, []);
    
    return (
      <div id="packages ">
     <img src={AllPackage} alt="..." className="img-fluid"/>
    
        <div className="row row-cols-1 row-cols-md-3 m-2  ">
          {packages.map((singlePackage) => (
            <div className="col mb-4 " id="packages" key={singlePackage._id}>
              <div className="card h-100 shadow-lg mb-5 bg-body rounded">
                <img
                  src={singlePackage.img}
                  className="card-img-top  rounded"
                  alt="..."
                  height="450"
                />
                <div className="card-body p-3">
                  <h2 className="card-title text-danger text-center">{singlePackage.name}</h2>
                  <p className="card-text">{singlePackage.Description}</p>
                  <h3 className="text-primary mb-3 mt-4">{singlePackage.short_description}</h3>
      

                </div>
                <div className=" text-center">
                  <small className="text-muted">
                    <h2 className="text-primary mt-1 mb-5">
                      Cost: {singlePackage.price}
                    </h2> 
                    <Link to={`/placeOrder/${singlePackage._id}`}>
                      <button className="btn btn-danger mb-5 ">
                      <i className="fas fa-cart-plus"></i> Book Package 
                      </button>
                    </Link>
                  </small>
                </div>
              </div>
            </div>
          ))}
        </div>
     
    </div>
    );
};

export default AllPackages;
