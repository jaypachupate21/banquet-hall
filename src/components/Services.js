import React from 'react';

const Services=()=>{
    const services=['Spacious Hall','Catering','Decoration','Parking','Music System'];
    return(
        <section id="services" className="services-section">
            <h2></h2>
            <ul className="services-list">{services.map((service,index)=>(<li key={index}>{service}</li>))}
            </ul>
        </section>
   );
};

export default Services;