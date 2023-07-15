import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Screen from '../Screen/Screen';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Screen></Screen>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;