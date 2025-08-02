import React from 'react';
import Header from './component/Header';
import Blogs from './component/Blogs';
import Footer from './component/Footer';


function App() {
 
  return (
    <>
      <div className=' flex flex-col w-full h-screen '>
       <div>
        <Header/>
        </div> 

        <div className='mt-[60px] '> 
 <Blogs/>
        </div>
       
       <div>
         <Footer/>

       </div>
       
      </div>
    </>
  )
}

export default App
