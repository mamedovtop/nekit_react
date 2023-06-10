import React from 'react';
import {useDispatch} from "react-redux";
import {userActions} from "../../redux/slices";

const User = ({user}) => {

    const {name, age, id} = user
    const dispatch=useDispatch();

    return (
        <div>
            <div>name :{name}</div>
            <div>age: {age}</div>
            <div>id: {id}</div>
            <button onClick={() => dispatch(userActions.setOneUser(user))}>show</button>
            <hr/>
        </div>

    );
};

export {User};