import React from 'react'

const Contact = () => {
  return (
    <div>
      <section className='contact-form'>
        <h1 className='fade-in'>Contact Us</h1>
        <form>
          <input type='text' placeholder='Full Name'/>
          <input type='email' placeholder='Email Address'/>
          <input type='text' placeholder='Phone Number'/>
          <textarea placeholder='Your Message' rows={5} required></textarea>
          <button type='submit'>Send Message</button>
        </form>
      </section>
    </div>
  )
}

export default Contact