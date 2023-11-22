import React from 'react'
import "./dash.css"
import BodySideBar from './BodySideBar'
import BodyMain from './BodyMain'
import BodyRight from './BodyRight'

const DashBody = () => {
  return (
    <div className='body'>
        <BodySideBar/>
        <BodyMain/>
        <BodyRight/>
    </div>
  )
}

export default DashBody