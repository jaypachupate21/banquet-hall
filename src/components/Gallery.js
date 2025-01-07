import React from 'react';
const Gallery=()=>{
    const images=['/public/img/4.jpg','/public/img/3.jpg','/public/img/5.jpg','/public/img/6.jpg','/public/img/7.jpg'];
    return(
        <section className="gallery">
            <h2>Our Gallery</h2>
            <div className="image-grid">{images.map((src,index)=>(<img key={index} src={src} alt={`Gallery ${index+1}`}/>))}
            </div>
        </section>
    );
};

export default Gallery;