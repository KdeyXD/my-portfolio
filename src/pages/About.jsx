import React from 'react'
import {Link} from 'react-router-dom'
const About = () => {
  return (
    <div className='h-[90dvh] flex flex-col gap-5 justify-center items-center text-slate-300'>
      <p>Page is under maintainance.</p>
      <Link to='/' className='bg-blue-500 px-4 py-3 rounded-lg'>Back to Home</Link>
    </div>
  )
}

export default About