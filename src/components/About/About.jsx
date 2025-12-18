import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className='about' id="About">
        <div className="about-left">
            <img src="https://plus.unsplash.com/premium_photo-1725408006810-53ae337c6efd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHVuaXZlcnNpdHklMjBzdHVkZW50fGVufDB8fDB8fHww" alt="" className='about-img' />
            <img src="https://cdn-icons-png.flaticon.com/128/2377/2377793.png" alt="" className='play-icon' />

        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>Our university is committed to providing quality education with a strong focus on practical learning. We create an environment where students can explore their interests, develop new skills, and build a strong foundation for their future</p>
            <p>With experienced faculty, well-designed courses, and modern learning resources, we ensure that every student receives the support they need. Our teaching approach combines theory with real-life applications to make learning easier and more engaging.</p>
            <p>Beyond academics, our university encourages students to participate in activities that build confidence, creativity, and leadership. We aim to shape well-rounded individuals who are ready to succeed in their careers and contribute positively to society.</p>
        </div>
      
    </div>
  )
}

export default About
