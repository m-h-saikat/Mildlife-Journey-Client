import React from 'react';
import destination1 from '../../../Images/centerPhoto/pic1.jpg';
import destination2 from '../../../Images/centerPhoto/pic2.jpg';
import destination3 from '../../../Images/centerPhoto/pic3.jpg';
import destination4 from '../../../Images/centerPhoto/pic4.jpg';
import destination5 from '../../../Images/centerPhoto/pic5.jpg';
import destination6 from '../../../Images/centerPhoto/pic6.jpg';

const Decoration = () => {
    return (
        <div className="container my-5">
               <section>
      <div className="title ">
      <h2 className=" my-5 packages-header p-3 m-3 mx-auto text-center">
      Our Most Popular <br/> Destination!     </h2>
    </div>
    <div className="row row-cols-1 row-cols-md-3 g-4 px-5 w-75 d-flex mt-2 mx-auto">
        <div className="col">
          <div className="card">
            <img src={destination1} className="card-img-top" alt="..."/>
            <div className="card-body bg-dark">
              <h5 className="card-title text-center text-info">Bandorban</h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img  src={destination2} className="card-img-top" alt="..."/>
            <div className="card-body bg-dark">
              <h5 className="card-title text-center text-info">SaintMartin</h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={destination3} className="card-img-top" alt="..."/>
            <div className="card-body bg-dark">
              <h5 className="card-title text-center text-info">Cox's Bazar</h5>
            </div>
          </div>
        </div>
        <div className="col">
            <div className="card">
              <img src={destination4} className="card-img-top" alt="..."/>
              <div className="card-body bg-dark">
                <h5 className="card-title text-center text-info">Patenga Sea beach</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img  src={destination5} className="card-img-top" alt="..."/>
              <div className="card-body bg-dark">
                <h5 className="card-title text-center text-info">Sajek <br/> &nbsp;</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={destination6} className="card-img-top" alt="..."/>
              <div className="card-body bg-dark">
                <h5 className="card-title text-center text-info">Sunamganj Tanguar Haor</h5>
              </div>
            </div>
          </div>
      </div>
    </section>
        </div>
    );
};

export default Decoration;