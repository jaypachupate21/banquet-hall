import React, {useState} from 'react';
const BookingForm=()=>{
    const [formData, setFormData]=useState({
        name:'',
        email:'',
        date:'',
        message:''
    });
    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        alert('Booking Submitted!');
    };
    return(
        <form className="booking-form" onSubmit={handleSubmit}>
            <h2>Book Your Event</h2>
            <input type="text" name="name" placeholder="Name" onChange={handleChange} required/>
            <input type="email" name="email" placeholder="Email" onChange={handleChange} required/>
            <input type="date" name="date" onChange={handleChange} required/>
            <textarea name="message" placeholder="Additional Details" onChange={handleChange}></textarea>
            <button type="submit">Submit</button>
        </form>
    );
};

export default BookingForm;