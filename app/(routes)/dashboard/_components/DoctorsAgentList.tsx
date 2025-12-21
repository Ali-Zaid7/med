
import { AIDoctorsAgents } from '@/shared/list'
import React from 'react'
import DoctorAgentCard from './DoctorAgentCard'  

export default function DoctorsAgentList() {
  return (
    <div className='mt-10'>
        <h2 className='text-xml font-bold ml-14 lg:mx-14 sm:mx-0 md:mx-5'>AI Specialist Doctors Agent</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols xl:grid-cols-5 gap-y-10 gap-x-5 mt-5 lg:mx-14 sm:mx-0 md:mx-5'>
            {AIDoctorsAgents.map((doctor, index)=>(
                <div key={index}>
                    <DoctorAgentCard doctorAgent={doctor}/>
                </div>
            ))}
        </div>
    </div>
)}
