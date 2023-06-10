import React from 'react';
import {useSelector} from "react-redux";

const Header = () => {

    const {oneUser} = useSelector(state => state.users)

    return (
        <div>
            {oneUser && oneUser.name}
        </div>
    );
};

export {Header};