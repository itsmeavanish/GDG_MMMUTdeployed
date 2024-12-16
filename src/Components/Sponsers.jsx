import React from 'react'
import google from './../assets/google.svg';
import adobe from './../assets/adobe.svg';
import amazon from './../assets/amazon.svg';
import flexport from './../assets/flexport.svg';
import deloitte from './../assets/deloitte.svg';
import bombora from './../assets/bombora.svg';
import sponserbg from './../assets/sponsorbg.svg';


function Sponsers() {
  return (
    <div
      className='h-[20rem] w-full'
      style={{ backgroundImage: `url(${sponserbg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
        
         <ul className='flex gap-8 relative'>
                <li className='absolute top-[8rem] left-[50%]'><img src={google} alt="" className='w-[11rem] h-[8rem] rounded-full'/></li>
                <li className='absolute top-[2.5rem] left-[30%]'><img src={adobe} alt="" className='w-[8rem] h-[8rem] rounded-r-full'/></li>
                <li className='absolute top-[9rem] left-[10%]'><img src={amazon} alt="" className='w-[5rem] h-[4rem] rounded-xl rounded-r-full'/></li>
                <li className='absolute top-[14rem] right-[1rem]'><img src={bombora} alt="" className='w-[5rem] h-[4rem]'/></li>
                <li className='absolute top-[9rem] right-[25%]'><img src={deloitte} alt="" className='w-[8rem] h-[4rem] rounded-r-full'/></li>
                <li className='absolute top-[1rem] right-[1rem]'><img src={flexport} alt="" className='w-[5rem] h-[4rem] rounded-xl rounded-l-full'/></li>
                </ul>

    </div>
  )
}

export default Sponsers