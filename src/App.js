
import {Cars, CarForm} from "./components";
import React, {useEffect, useState} from 'react';
import {carService} from "./services";

const App = () => {

    const [cars,setCars] = useState([]);
  const [updateCar,setUpdateCar] = useState(null);
  const [deleteCar, setDeleteCar] = useState(null);


    useEffect(() => {
        carService.getAll().then(({data}) => setCars([...data]))}, [])

    return (
        <div>
          <CarForm setCars = {setCars} updateCar = {updateCar} deleteCar={deleteCar}/>
            <hr/>
            <Cars cars = {cars} setUpdateCar={setUpdateCar} setDeleteCar = {setDeleteCar}/>
        </div>
    );
};

export {App};