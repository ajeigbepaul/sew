import React from 'react'
import { useNavigate } from 'react-router-dom';

function Missing()  {
const navigate = useNavigate()
return (
  <div className="w-screen flex flex-col items-center justify-center bg-gray-800 text-red-400 h-screen">
    <span>Ooops!!!</span>
    <button className="p-2 rounded-md" onClick={()=>navigate("/")}>Go back</button>
  </div>
);
}

export default Missing