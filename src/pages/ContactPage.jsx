import React, { useState } from 'react'
import "../components/ContactPage.css" 





function ContactPage() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, email, message }),
        });
        const data = await response.json();
        console.log(data);
      };
    
  return (
    

    <div className='Contact'>
        <main>
            <div className='contact-us-section'>
                <h1 className='contactUs-h1'>Contact Us</h1>

                <p className='contact-us-text'>
                    When requesting a quote it is best to be as detailed as possible about your order request.  
                </p>

                <p className='contact-us-copypaste'>COPY & PASTE BELOW</p>

                <ul>
                    <li>How many shirts:</li>
                    <li>What color shirts::</li>
                    <li>Sizes:</li>
                    <li>What area is being printed: FRONT ONLY? FRONT & BACK?</li>
                    <li>Do you have your own artwork/graphic that is ready to print?</li>
                    <li>Due Date:</li>
                    <li>I am local, I can pick up:</li>
                    <li>I will need my order shipped:</li>
                </ul>

                <p className='red-text-warning' id='red-text-top'>(Must be at least 7-10 business days out from time of payment.)</p>

                <p className='red-text-warning'>Image formats preferred png, photoshop, jpg, and high resolution.</p>
            </div>

            <form onSubmit={handleSubmit}>
                <div className='name-and-email-section'>
                    <div className='name-container'>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="contact-name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div className='email-container'>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="contact-email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                </div>
                
                <div className='message-container'>
                    <label htmlFor="message">Message</label>
                    <textarea id="contact-message" name="message" rows="5" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                    
                </div>

                <button type="submit" id='contact-submit-btn'>Submit</button>
            </form>
        </main>
        
    </div>
  )
}

export default ContactPage