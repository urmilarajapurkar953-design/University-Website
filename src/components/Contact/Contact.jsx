import React from 'react'
import './Contact.css'

const Contact = () => {
  const [result, setResult] = React.useState("")

  const onSubmit = async (event) => {
    event.preventDefault()
    setResult("Sending....")
    const formData = new FormData(event.target)

    formData.append("access_key", "82f0ac2a-a1fd-426d-8470-8dfcc1aa47c4")

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    })

    const data = await response.json()

    if (data.success) {
      setResult("Form Submitted Successfully")
      event.target.reset()
    } else {
      console.log("Error", data)
      setResult(data.message)
    }
  }

  return (
    <div id="contact" className='contact'> {/* ✅ Use lowercase id */}
      <div className="contact-col">
        <h3>
          send us a messege 
          <img src="https://cdn-icons-png.flaticon.com/128/9195/9195102.png" alt="" />
        </h3>
        <p>If you have any questions, need more information, or want guidance about our programs, our team is always ready to help. Reach out to us through phone, email, or the form on this page, and we’ll get back to you as soon as possible. We’re here to support you and make your experience smooth and hassle-free.</p>
        <ul>
          <li>contact@urmicoding.dev <img src="https://cdn-icons-png.flaticon.com/128/542/542689.png" alt="" /></li>
          <li>+91 7285496278 <img src="https://cdn-icons-png.flaticon.com/128/455/455705.png" alt="" /></li>
          <li>123, Education Avenue, Near City Center, Mumbai, Maharashtra 400001 <img src="https://cdn-icons-png.flaticon.com/128/2991/2991231.png" alt="" /></li>
        </ul>
      </div>

      <div className='contact-col'>
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input type="text" name='name' placeholder='Enter Your Name ' required/>

          <label>Phone Number</label>
          <input type="tel" name="Phone" placeholder='Enter Your Phone Number' required />

          <label>Write your message Here</label>
          <textarea name="Message" row="6" placeholder='Enter Your Message' required></textarea>

          <button type='submit' className='btn drak-btn'>Submit Now</button>
        </form>

        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
