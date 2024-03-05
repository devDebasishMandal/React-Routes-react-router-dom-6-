import React from 'react'
import { useNavigate } from 'react-router-dom';
const About = ({count,setCount}) => {
  const navigate =useNavigate();
  return (
    <div>
      <h1>About</h1>
      <p>This is About</p>
      <button onClick={() => navigate(1)}>Next</button> 
      <button onClick={() => navigate(-1)}>Back</button>
      <hr />
      <br />
      <h2>{count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        0
      </button>
    </div>
  );
}

export default About