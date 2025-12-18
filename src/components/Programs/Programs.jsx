import React from 'react'
import './Programs.css'

const Programs = () => {
  return (
    <div className='programs'id="Program" >

      <div className='program'>
        <img
          src="https://images.unsplash.com/photo-1590070572368-74a1e6da0a34?w=600&auto=format&fit=crop&q=60"
          alt=""
        />

        <div className='caption'>
          <p>Graduation Degree</p>
        </div>
      </div>

      <div className='program'>
        <img
          src="https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?w=600&auto=format&fit=crop&q=60"
          alt=""
        />

       

        <div className='caption'>
          <p>Master Degree</p>
        </div>
      </div>

      <div className='program'>
        <img
          src="https://plus.unsplash.com/premium_photo-1714397477874-c4ee6cb075bf?w=600&auto=format&fit=crop&q=60"
          alt=""
        />


        <div className='caption'>
          <p>Post Graduation</p>
        </div>
      </div>

    </div>
  )
}

export default Programs
