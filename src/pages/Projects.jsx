import React from 'react'
import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <div className='text-white h-[78dvh] flex justify-center items-center flex-col text-center px-10'>
      <p>Looking for my projects and experience?</p>
      <p>Well, I'm practicing on any project and will avaliable on my portfolio</p>
      <Link to='/' className='bg-blue-500 px-4 py-3 rounded-xl'>Back to Home</Link>
    </div>
  )
}

export default Projects