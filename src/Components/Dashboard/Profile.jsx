import React from 'react'
import "./dash.css"
import img from "../../assets/person.jpg"

const Profile = () => {
  return (
    <div className='profile'>
        <div className="circle">
            {/* <img src={img} alt="" /> */}
        </div>
        <span className='name'>Ram Mohan</span>
        <span className='email'>ramcharan12@gmail.com</span>
    </div>
  )
}

export default Profile