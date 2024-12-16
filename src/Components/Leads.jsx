import React from 'react'
import AllLeads from '@/utils/AllLeads.jsx'
import Advisor from '@/utils/Advisor.jsx'

function Leads() {


  return (
    <div className='h-fit w-full p-[2rem] flex flex-col flex-wrap'>
      <h1 id='Team' className='font-bold text-4xl text-red-400 m-5 justify-self-center pb-[2rem]'>Core Team of GDG-MMMUT</h1>
      <div className='w-full h-[90%] flex flex-row justify-around p-5 '>
        {/* md:flex md:flex-row sm:flex sm:flex-row */}
        <div className='w-[30%] h-[100%] bg-blue-200 p-[2rem] '>
          <h1 className='font-bold text-2xl text- text-[#0F9D58] justify-self-center'>Faculty Advisor</h1>
          <Advisor />
        </div>
        <div className='w-[60%] bg-blue-500'>
          <AllLeads />
        </div>
      </div>
    </div>
  )
}

export default Leads