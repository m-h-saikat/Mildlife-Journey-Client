import React, { useEffect, useState } from "react";
import "./Galary.css";
import galary from "../../Assets/img/GALLERY.png"


const Galary = () => {
  const [galaries, setGalaries] = useState();
  useEffect(() => {
    fetch(`https://morning-waters-52432.herokuapp.com/galary`)
      .then((res) => res.json())
      .then((data) => setGalaries(data));
  });

  return (
    <div>
                  <img src={galary}  width="100%" alt="..."/>

      <div className="conatiner">
        <div className="row">
          {galaries?.map((galary) => (
        <div className="col-md-3">
            <div className="card card-body">
             
             <img src={galary.img} alt="" className="w-100 img-fluid" height="300" />
             <h3 className="text-center">{galary.imgName}</h3>
           
         </div>
        </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Galary;
