import React from 'react';

const Car = ({car,setUpdateCar, setDeleteCar}) => {

    const {id, brand, price, year } = car;

    return (
        <div>
            <div> id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year : {year}</div>
            <button onClick={() => setUpdateCar(car)}>update</button>
            <button onClick={() => setDeleteCar(car)} >delete</button>
        </div>
    );
};

export {Car};