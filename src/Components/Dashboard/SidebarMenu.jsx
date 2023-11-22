import React from 'react'
import { SidebarData } from '../../data/SidebarData'
import DashboardIcon from '@mui/icons-material/Dashboard';


const SidebarMenu = () => {
  return (
    <div>
      {SidebarData.map((item) => (
        <div key={item.id} className='sidebar-menu'>
          {item.logo}
          <span className='sidebar-name'>{item.name}</span>
        </div>
      ))}
    </div>
  )
}

export default SidebarMenu