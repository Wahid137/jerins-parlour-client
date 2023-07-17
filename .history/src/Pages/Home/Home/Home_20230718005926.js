import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Screen from '../Screen/Screen';
import Testimonial from '../Testimonial/Testimonial';
import HandleProject from '../HandleProject/HandleProject';
import UseTitle from '../../../hooks/useTitle';

const Home = () => {
    UseTitle("Home")
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Screen></Screen>
            <Testimonial></Testimonial>
            <HandleProject></HandleProject>
        </div>
    );
};

export default Home;