import React from 'react';
import {Cars, CarForm} from "./components";

const App = () => {
    return (
        <div>
          <CarForm/>
            <hr/>
            <Cars/>
        </div>
    );
};

export {App};