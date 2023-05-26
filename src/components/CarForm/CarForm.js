import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {carValidator} from "../../validator";
import {joiResolver} from "@hookform/resolvers/joi";
import {carService} from "../../services";


const CarForm = ({setCars, updateCar, deleteCar}) => {

    const {register, handleSubmit,reset, formState: {isValid, errors}, setValue} = useForm({
        mode: "all",
        resolver: joiResolver(carValidator)
    });

    useEffect(()=>{
        if(updateCar) {
            setValue("brand", updateCar.brand)
            setValue("price", updateCar.price)
            setValue("year", updateCar.year)
        }
    },[updateCar])

    useEffect(() => {
        if(deleteCar) {
            setValue("brand", deleteCar.brand)
            setValue("price", deleteCar.price)
            setValue("year", deleteCar.year)
        }

    }, [deleteCar] )




     const submit = async (car) => {
        const {data} = await carService.create(car)
        setCars(perv =>[...perv, data])
        console.log(data)
    };


const update = async (car) =>{
    const {data} = await carService.updateById(updateCar.id,car)
    console.log(data);
    if(data) {
        const {data} = await carService.getAll()
        setCars(data);
    }
}



    return (
        <div>
            <form onSubmit={handleSubmit( updateCar ? update : submit )}  >
                <input type="text" placeholder={"brand"} {...register("brand")} />
                {errors.brand && <span>{errors.brand.message}</span>}
                <input type="text" placeholder={"price"} {...register("price") }/>
                {errors.price && <span>{errors.price.message}</span>}
                <input type="text" placeholder={"year"} {...register("year") }/>
                {errors.year && <span>{errors.year.message}</span>}
                <button disabled={!isValid}>{updateCar ? "Update":"Create"}</button>
            </form>
        </div>
    );
}

export {CarForm}