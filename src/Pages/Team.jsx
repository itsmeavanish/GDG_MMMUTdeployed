import Footer from '@/Components/Footer.jsx'
import Header from '@/Components/Header.jsx'
import React from 'react'
import { AdvisorBrief } from '@/utils/Advisor.jsx';
import FormerLeads from "../Components/FormerLeads.jsx";
import FirstYear from '@/Components/FirstYear.jsx';


function Team() {
  return (
    <div>
        <Header/>
        <div className='flex gap-[2rem] m-5 mt-[4rem] w-full h-[25rem] justify-around'>
        <div className='w-[40%] h-[100%] flex justify-center items-center m-5'>
            <h1 className='text-[5rem] text-[#F4B400] font-serif'>
                OUR TEAM
            </h1>
        </div>
        <div>
            <img src="https://media.licdn.com/dms/image/v2/D4E12AQHHMdfFMwm3YA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1661728501609?e=2147483647&v=beta&t=4wPT3zOlZfmmeybSa6bCNQRkcBObVG_5_adXVMPkrg4" alt="" className='w-[100%] h-[100%]'/>
        </div>
        </div>
        <div className='flex justify-around items-center'>
        <div className='w-[45%]'>
            <AdvisorBrief/>
            <p className='justify-self-center text-2xl'><span className='text-[#DB4437]'>Faculty</span><span className='text-[#4285F4]'> &nbsp;Advisor</span> </p>
        </div>
        <div className='w-[45%]'>
            <AdvisorBrief/>
            <p className='justify-self-center text-2xl  text-[#F4B400]'>
            <span className='text-[#DB4437] text-xl'>G</span>
                                <span className='text-[#0F9D58] text-xl'>D</span>
                                <span className='text-[#F4B400] text-xl'>G</span>
                                <span className='text-[#4285F4] text-xl'>-MMMUT</span>
                <span className='text-[#0F9D58]'> &nbsp;Lead</span> </p>
        </div>
        </div>
        {/* Former year team */}
        <div>
            <FormerLeads label={"Previous Team"}/>
        </div>
        {/* Third year team */}
        <div>
            <FormerLeads label={"Third year Team"}/>
        </div>
        {/* second year team */}
        <div>
            <FormerLeads label={"Second year Team"}/>
        </div>
        {/* First year team */}
        <div>
            <FirstYear/>
        </div>
        <Footer/>
    </div>
  )
}

export default Team