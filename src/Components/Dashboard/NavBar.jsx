import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import SidebarMenu from './SidebarMenu';
import Profile from './Profile';
import Logout from './Logout';

const NavBar = () => {

    const [show,setShow] = useState(false)

    const handleMenu=(event)=>{
         if (window.innerWidth < 600){
            setShow(!show)
            setAnchorEl(event.currentTarget);
            console.log(show);
         }
    }
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='navbar-reload'>
        <div className="sub-navbar-1">
            <div className="sub1-round"></div>
            XYZ Enterprises Pvt. Ltd
        </div>
        <div className="sub-navbar-2" onClick={handleMenu}>
            <KeyboardArrowDownIcon/>
            
        </div>
        <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <div style={{width:"300px",height:"420px"}}>
            <Profile/>
            <SidebarMenu/>
            <Logout/>
        </div>
      </Popover>
    </div>
  )
}

export default NavBar