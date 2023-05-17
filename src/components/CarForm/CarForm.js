import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {carValidator} from "../../validator";
import {joiResolver} from "@hookform/resolvers/joi";
import {carService} from "../../services";


const CarForm = ({setCars, updateCar}) => {

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

    const submit = async (car) => {
        const {data} = await carService.create(car)
        setCars(perv =>[...perv, data])
        reset()
        console.log(data)

    };

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}  >
                <input type="text" placeholder={"brand"} {...register("brand")} />
                {errors.brand && <span>{errors.brand.message}</span>}
                <input type="text" placeholder={"price"} {...register("price") }/>
                {errors.price && <span>{errors.price.message}</span>}
                <input type="text" placeholder={"year"} {...register("year") }/>
                {errors.year && <span>{errors.year.message}</span>}
                <button disabled={!isValid}>{updateCar?"Save":"Update"}</button>
            </form>
        </div>
    );
}

export {CarForm}