import React from 'react'
import "./dashboard.css"
import Header from '../../Components/Dashboard/Header'
import DashBody from '../../Components/Dashboard/DashBody'

const Dashboard = () => {
  return (
    <div className='dashboard-container'>
        <Header/>
        <DashBody/>
    </div>
  )
}

export default Dashboard