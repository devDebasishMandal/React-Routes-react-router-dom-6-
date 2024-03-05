import React from 'react'
import {useNavigate } from 'react-router-dom'
const Blog = () => {

const navigate=useNavigate();

  return (
    <div>
      <button onClick={()=>navigate(1)}>Next</button> 
      <button onClick={()=>navigate(-1)}>Back</button> 
    </div>
  );
}

export default Blog;