import React from 'react';

const Contact=()=>{
    return(
        <section id="contact" className="contact-section">
            <h2>Contact us</h2>
            <form>
                <input type="text" placeholder="Your Name" required/>
                <input type="email" placeholder="Your Email" required/>
                <textarea placeholder="Your Message" rowws="4" required></textarea>
                <button type="submit">Send Message</button>
            </form>
        </section>
    )
}