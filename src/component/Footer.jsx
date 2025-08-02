import React from 'react'
import { useContext } from 'react';
import { AppContext } from '../ContextAPI/AppContext';

const Footer = () => {

   

    const {page,totalPage,pageHandler,blogs} = useContext(AppContext);
     let  val=page;
      if (!blogs || blogs.length === 0) {
        return null;
    }
  return (

    
    <div className='w-full h-[50px] border-t-2 bg-white border-gray-300  fixed bottom-0'>
        <div className='flex w-11/12 max-w-[650px] mx-auto justify-between  items-center' >  
            <div className='flex gap-x-2' >
                <div>
                    {page >1 &&
                    <button   onClick={(page)=>pageHandler(val-1)}
                    className='border-2 border-gray-300 text-base py-1 px-4 mt-2 text-black rounded-md hover:cursor-pointer '
                    >Previous</button>
                     }
                    </div>
                    <div>
                     { page <totalPage &&
                      <   button onClick={(page)=>pageHandler(val+1)}
                    className='border-2 border-gray-300 text-base py-1 px-4 mt-2 text-black rounded-md hover:cursor-pointer '
                        >Next</button>} 
                    </div>

   
   
      </div>

      <div className='font-bold text-sm  mt-2'>
        Page {page} of {totalPage}
      </div>
            
        </div>
      
    </div>
  )
}

export default Footer
