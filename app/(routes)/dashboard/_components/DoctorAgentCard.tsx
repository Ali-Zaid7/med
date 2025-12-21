import { Button } from '@/components/ui/button'
import { IconArrowRight } from '@tabler/icons-react'
import Image from 'next/image'
import React from 'react'

type doctorAgent={
     id: number,
    specialist: string,
    image:string,
    description: string,
    agentPrompt: string
}

type props = { doctorAgent:doctorAgent }

function DoctorAgentCard({doctorAgent}:props) {
  return (
    <div>
      <Image src={doctorAgent.image} alt={doctorAgent.specialist}
      width={200} height={300} 
      className='w-full h-[250px] object-cover rounded-xl '/>

      <h2 className='font-bold mt-1.5'>{doctorAgent.specialist}</h2>
      <p className='line-clamp-2 text-sm text-shadow-gray-500'>{doctorAgent.description}</p>
      <Button className='w-full dark:bg-[#009f6b] mt-3 dark:text-white'>Start a Consultation <IconArrowRight/></Button>
    </div>
  )}

export default DoctorAgentCard