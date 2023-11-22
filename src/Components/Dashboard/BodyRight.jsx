import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';

const BodyRight = () => {
  return (
    <div className='body-right'>
        <div className="body-right-top">
            <div className="noti-bar">
                <NotificationsIcon style={{height:"50px",width:"40px"}} color='primary'/>
                <div className="round">3</div>
            </div>
        </div>
        <div className="body-right-bottom">
            <div className="white"></div>
            <div className="plus">+</div>
        </div>
    </div>
  )
}

export default BodyRight