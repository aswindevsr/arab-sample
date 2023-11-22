import React from 'react'
import Profile from './Profile'
import SidebarMenu from './SidebarMenu'
import "./dash.css"
import Logout from './Logout'

const BodySideBar = () => {
    return (
        <div className='body-sidebar'>
            <div className='body-sidebar-top'>
                <Profile/>
                <SidebarMenu/>
            </div>
            <Logout/>
        </div>
    )
}

export default BodySideBar