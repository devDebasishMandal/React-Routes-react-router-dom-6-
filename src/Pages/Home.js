import React from "react";

import { useNavigate } from "react-router-dom";

const Home =()=>{

const navigate=useNavigate();

    return (
      <div>
        <h1>Home</h1>
        <p>This is Home</p>
        <button onClick={() => navigate(1)}>Next</button> 
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
    );
}


export default Home;