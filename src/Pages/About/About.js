import React from 'react';
import './About.css'

import AboutImg from "../../Assets/img/header-bg-2.png"

const About = () => {
    return (

        <div className="">
            <section>
            <img src={AboutImg} className="img-fluid " alt="..."/>

                <div className="container">
                    <div className="row">

                        <div className="col-md-12">
<h1 className='text-center'>‘Mild life journey ’</h1>

                            <p className="AboutUS py-5"> 
                            “Travel is the main thing you purchase that makes you more extravagant”. We, at ‘Mild life journey ’, swear by this and put stock in satisfying travel dreams that make you perpetually rich constantly.
<br/> We have been moving excellent encounters for a considerable length of time through our cutting-edge planned occasion bundles and other fundamental travel administrations. We rouse our clients to carry on with a rich life, brimming with extraordinary travel encounters.
<br/> Through our exceptionally curated occasion bundles, we need to take you on an adventure where you personally enjoy the stunning magnificence of America and far-off terrains. We need you to observe sensational scenes that are a long way past your creative ability.

                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;