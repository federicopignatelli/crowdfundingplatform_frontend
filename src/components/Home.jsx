import React from 'react';
// import { useState, useEffect } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

const Home = () => {
    // const [currentSlide, setCurrentSlide] = useState(0);
    // const [Slides, setSlides] = useState([]);

    // console.log(Slides)

    // useEffect(() => {
    //     const fetchSlides = async () => {
    //         try {
    //             const response = await fetch(`http://localhost:4003/campaign/getcampaigns?page=0&size=3&sortBy=startDate`);
    //             if (!response.ok) {
    //                 throw new Error('Errore nella richiesta!');
    //             }
    //             if (response.ok) {
    //                 const data = await response.json();
    //                 console.log("dati fetch" + data.content)
    //                 setSlides(data.content);
    //             }

    //         } catch (error) {
    //             console.error('Si è verificato un errore:', error);
    //         }
    //     };

    //     fetchSlides();
    // }, []);

    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 5000,
    //     afterChange: (current) => setCurrentSlide(current)
    // };

    return (
        <>

        </>
        //     <div className="full-width-slider">

        //         <Slider {...settings}>
        //             {Slides.map((slide, index) => (
        //                 <div key={index}>
        //                     <img src={slide.campaignCover} alt={slide.title} />
        //                     <div className="slide-content">
        //                         <h2>{slide.title}</h2>
        //                         <p>{slide.subtitle}</p>
        //                     </div>
        //                 </div>
        //             ))}
        //         </Slider>



        //         <div className="current-slide-indicator">
        //             Slide {currentSlide + 1} di {Slides.length}
        //         </div>
        //     </div>


    );
};

export default Home;