import React from 'react';
import Packages from '../Packages/Packages';


import Banner from './Banner/Banner';
import CustomerReviews from './CustomerReviews/CustomerReviews';
import Decoration from './Decoration/Decoration';
import FAQ from './FAQ/FAQ';
const Home = () => {
    return (
<div>
<Banner></Banner>
<FAQ></FAQ>

<Packages></Packages>
<Decoration></Decoration>
<CustomerReviews></CustomerReviews>

        </div>
    );
};

export default Home;