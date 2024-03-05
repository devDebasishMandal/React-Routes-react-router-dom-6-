import React from 'react'
import { useNavigate } from 'react-router-dom'
const Contact = ({count}) => {

  let navigate= useNavigate();// returns a function 

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => navigate("/blog")}>Go to </button>
      {/* <button onClick={() => navigate("blog")}>Go to </button> */}
      {/* /blog means -- it gets added after the end point.
      blog means -- it gets added after the current address like contact/blog if you
      r are in contact page right now 
          */}
      <button onClick={() => navigate(1)}>Next</button> 
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}

export default Contact