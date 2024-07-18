import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Projectsdiv from './Projectsdiv'
import LatestProjects from './LatestProjects'
import Applicationprocess from './Applicationprocess'
import Applicationprocess2 from './Applicationprocess2'
import Whyus from './Whyus'

function Homepage() {
  return (
    <div className='w-full'>
      <div>
        <Header/>
      </div>
      <div className='homepage-bg w-full h-screen flex flex-col justify-center items-start'>

<div className='w-1/2 text-3xl text-white'>
  Get Freelancing Jobs Instantly Start Working for Yourself!
</div>

<div  className='text-white'>
  work with the best freelance talent from around the world on our secure,
  flexible and cost-effective platform
</div>
<div>
 
<form className="flex items-center max-w-sm mx-auto">   
    <div className="relative w-full">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        </div>
        <input type="text"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5   "placeholder="What skills are you searchingf for?" required />
        
    </div>
    <button type="submit" className="p-2.5 text-sm font-medium text-white bg-blue-700 rounded-sm border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      search
        <span className="sr-only">Search</span>
    </button>
</form>
<div className='text-white'>Academic writing|VC/Resume Writing|Copywriting</div>
</div>
<button className='bg-white text-black rounded-lg w-32 h-17'>Get Started</button>
      </div>

<div>
  <Projectsdiv/>
</div>
<div>
  <LatestProjects/>
</div>
<div>
  <Whyus/>
</div>

<div>
  <Applicationprocess/>
  <Applicationprocess2/>
</div>

      <div>
        <Footer/>

      </div>


      </div>
  )
}

export default Homepage