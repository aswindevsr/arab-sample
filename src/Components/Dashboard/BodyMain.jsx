import React from 'react'
import { PlansData } from '../../data/PlansData'
import { PlansData2 } from '../../data/PlansData2'

const BodyMain = () => {
  return (
    <div className='body-main'>
        <div className="body-main-top">
            <span className='bodymain-heading'>Choose a plan thats right for you !</span>
            <div className="bodymain-plans">
                <div className="b-m-plan">
                    <div className="b-m-plan-left">Monthly</div>
                    <div className="b-m-plan-right">Annually <span className='text-green'>- 10%</span></div>
                </div>
            </div>
        </div>
        <div className="body-main-center">
            {PlansData.map((item)=>(
                <div key={item.id} className="b-m-center-card">
                <span className='b-m-plan-heading'>{item.plan}</span>
                <span className='b-m-old-price'>{item.oldRate}</span>
                <span className='b-m-new-price'>{item.currentRate}<span className='mo-text'>mo</span></span>
                <div className="btn-getstarted" style={{backgroundColor: item.btnColor}}>
                    Get Started
                </div>
                <div className="line"></div>
                <span className='b-m-text'>What you'll get :</span>
                <p className='b-m--sub-text'>* Upto {item.users} users</p>
                <p className='b-m--sub-text'>* Upto {item.storage} Storage</p>
                <p className='b-m--sub-text'>* {item.support}</p>
                <span className='bottom-text'>EXPLORE FEATURES H</span>
            </div>
            ))}

        </div>
        <div className="body-main-bottom">
            {/* {window.innerWidth < 600 ? <span>Look whats best for you !</span>:""} */}
        {PlansData2.map((item)=>(
            <div className="b-main-bottom-card">
                
                    <div className="b-m-b-left">
                    <div className="bmb-h" style={{backgroundColor:item.color}}>{item.tag}</div>
                    <span className="bmb-heading">{item.plan}</span>
                    <p className="bmb-para">{item.desc}</p>
                    <div className="bmb-getstarted" style={{backgroundColor:item.color}} >
                    Get Started
                </div>
                </div>
               
                <div className="b-m-b-right">
                <span className='b-m-text'>What you'll get :</span>
                <p className='b-m--sub-text'>* Upto 8 users</p>
                <p className='b-m--sub-text'>* Upto 3gb Storage</p>
                <p className='b-m--sub-text'>* Email support</p>
                </div> 
            </div>))}
        </div>
    </div>
  )
}

export default BodyMain