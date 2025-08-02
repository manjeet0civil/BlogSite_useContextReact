import React, { use } from 'react'   
import { useContext } from 'react'
import { useState } from 'react';
import { AppContext } from '../ContextAPI/AppContext'; 
import { useEffect } from 'react';
import Spinner from './spinner'; // Import Spinner component

const Blogs = () => {
    
   

    
    const { blogs ,fetchBlogs,loading} = useContext(AppContext);
    // const[index,setindex]=useState(0);
     useEffect(() => {
        fetchBlogs();
    }, []);

  return (

    loading?(<Spinner/>):(
          <div className=' w-11/12 max-w-[650px] mx-auto mb-[70px]  '>{
        
        blogs.map(blog => (
    <div key={blog.id} className='mt-[35px]'>
     <h2 className='font-bold text-[19px]'>{blog.title}</h2>
     <div className='text-sm'>
      By <span className='italic'>{blog.author}</span> On <span className='font-bold underline  hover:cursor-pointer'>{blog.category}</span>
    </div>
    <div className='text-sm'>Posted On {blog.date}</div>
    <div className='mt-3'><p>{blog.content}</p></div>
    <div className='flex text-blue-600 gap-x-2 underline text-xs font-bold mt-1.5 hover:cursor-pointer '>{blog.tags.map((tag, index) => (
                            <div key={`${blog.id}-${index}`}>
                                #<span>{tag}</span>
                            </div>
                        ))}
  
    </div>


  </div>
))

}      
    </div>
  )
        
    );

}

  


export default Blogs
