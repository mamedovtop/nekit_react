import React from 'react';

const Car = ({car,setUpdateCar}) => {

    const {id, brand, price, year } = car;

    return (
        <div>
            <div> id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year : {year}</div>
            <button>update</button>
            <button onClick={() => setUpdateCar(car)}>delate</button>
        </div>
    );
};

export {Car};