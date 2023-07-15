import React from 'react';

const ServicesCard = ({ service }) => {
    const { name, img, price, details } = service;
    return (
        <div>
            <h2>{name}</h2>
        </div>
    );
};

export default ServicesCard;