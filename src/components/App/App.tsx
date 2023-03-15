import React from "react";
import './App.css';
import birdImg from "../../assets/images/wbird.jpg";

const App = () => {
    return (
        <>
            <div className="hello-world">Hello, world!</div>
            <img src={birdImg} alt="bird" />
        </>);
};

export default App;