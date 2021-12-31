import React, { useState } from 'react'
import './clock.css'

export default function Clock() {
    
  let time = new Date().toLocaleTimeString();

  const [ctime, setCtime] = useState(time);
  
  const UpdateTime = () => {
      time = new Date().toLocaleTimeString();
      setCtime(time);
  };

  setInterval(UpdateTime,1000);

    return (
        <div className="parent-div">
            <h1> {ctime} </h1>
        </div>
    )
}
