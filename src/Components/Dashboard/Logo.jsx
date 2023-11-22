import React from 'react'
import './dash.css'
import SailingIcon from '@mui/icons-material/Sailing';

const Logo = () => {
  return (
    <>
    <div className='logo'>
        <SailingIcon color='primary' style={{width:"45px",height:"45px",cursor:"pointer"}}/>
    </div>
    <div className='arrow-right'></div>
    {/* <div>jii</div> */}
    </>

  )
}

export default Logo