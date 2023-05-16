import React from 'react';
import {useForm} from "react-hook-form";

const CarForm = () => {

    const {register, handleSubmit,reset, formState: {isValid, errors}, setValue} = useForm({
        mode: "all"
    });

    const submit = (data) => {
        console.log(data)

    };

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}  >
                <input type="text" placeholder={"brand"} {...register("brand")} />
                <input type="text" placeholder={"price"} {...register("price") }/>
                <input type="text" placeholder={"year"} {...register("year") }/>
                <button>Save</button>
            </form>
        </div>
    );
}

export {CarForm}