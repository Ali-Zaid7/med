"use client"
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React, { useState } from 'react'
import AddNewSessionDialog from './AddNewSessionDialog';

function HistoryList() {
  const [historyList, setHistoryList] = useState<any[]>([]);

  return (
    <div className='mt-10'>
      {historyList.length === 0 ? (
        <div className='py-[40px] flex dark:bg-gray-900 gap-5 flex-col justify-center items-center p-7 border border-dashed rounded-2xl '>
          <Image 
            src="/abc.jpg" 
            alt="Image" width={150} height={150}  
          />
          <h2 className='font-bold text-xl mt-5'>No Recent Consultations</h2>
          <p>It looks like you haven`t consulted with any doctors yet.</p>
        <AddNewSessionDialog />
        </div>
      ) : (
        <div>List</div>
      )}
    </div>
  )
}

export default HistoryList;
