

import {Car} from "../Car/Car";

const Cars = ({cars, setUpdateCar, setDeleteCar}) => {



    return (
        <div>
            {
                cars.map(car => <Car key = {car.id} car = {car} setUpdateCar={setUpdateCar} setDeleteCar ={setDeleteCar}/>)
            }
        </div>
    );
};

export {Cars};