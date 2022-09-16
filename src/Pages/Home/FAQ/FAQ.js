import React from 'react';
import icon1 from '../../../Assets/img/icon-1.png';
import icon2 from '../../../Assets/img/icon-2.png';
import icon3 from '../../../Assets/img/icon-3.png';
import icon4 from '../../../Assets/img/icon-4.png';
import icon5 from '../../../Assets/img/icon-5.png';
import icon6 from '../../../Assets/img/icon-6.png';
const FAQ = () => {
    return (
        <div>
        
        <section className="services">

<h1 className="heading-title text-center fs-1 fw-bold p-5"> OUR SERVICES </h1>

<div className="box-container d-block d-md-flex gap-3 justify-content-center">

   <div className="box border bg-info p-3 d-flex justify-content-center align-items-center d-md-block">
      <img className="p-3" src={icon1} alt=""/>
      <h3 className="text-center">Adventure</h3>
   </div>

   <div className="box border bg-info p-3 d-flex justify-content-center align-items-center d-md-block">
      <img className="p-3" src={icon2} alt=""/>
      <h3 className="text-center">Tour guide</h3>
   </div>

   <div className="box border bg-info p-3 d-flex justify-content-center align-items-center d-md-block">
      <img className="p-3" src={icon3} alt=""/>
      <h3 className="text-center">Trekking</h3>
   </div>

   <div className="box border bg-info p-3 d-flex justify-content-center align-items-center d-md-block">
      <img className="p-3" src={icon4} alt=""/>
      <h3 className="text-center">Camp Fire</h3>
   </div>

   <div className="box border bg-info p-3 d-flex justify-content-center align-items-center d-md-block">
      <img className="p-3" src={icon5} alt=""/>
      <h3 className="text-center">Off road</h3>
   </div>

   <div className="box border bg-info p-3 d-flex justify-content-center align-items-center d-md-block">
      <img className="p-3" src={icon6} alt=""/>
      <h3 className="text-center">Camping</h3>
   </div>

</div>

</section>
        </div>
    );
};

export default FAQ;