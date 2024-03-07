import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Card, CardHeader, CardBody, Image, Button } from "@nextui-org/react";


const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [Slides, setSlides] = useState([]);
    const navigate = useNavigate()
    console.log(currentSlide)

    useEffect(() => {
        const fetchSlides = async () => {
            try {
                const response = await fetch(`http://localhost:4003/campaign/getcampaigns?page=0&size=3&sortBy=startDate`);
                if (!response.ok) {
                    throw new Error('Errore nella richiesta!');
                }
                if (response.ok) {
                    const data = await response.json();
                    console.log("dati fetch" + data.content)
                    setSlides(data.content);
                }

            } catch (error) {
                console.error('Si è verificato un errore:', error);
            }
        };

        fetchSlides();
    }, []);

    const reversedSlides = [...Slides].reverse();

    const goToExploreCampaign = () => {
        navigate('/explorecampaign')
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        afterChange: (current) => setCurrentSlide(current)
    };

    return (
        <>

            <div className='w-full flex flex-col my-6 px-5'>
                <p className="font-mono font-bold text-2xl sm:text-3xl text-center">Find it first on TechFunds.</p>
                <p className='font-sans text-base sm:text-lg text-center'>TechFunds is where early adopters and innovation seekers find lively, imaginative tech before it hits the mainstream.
                </p>
                <div className='flex flex-row justify-center'>
                    <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg my-3 w-60 text-base uppercase tracking-wider font-bold"
                        onClick={goToExploreCampaign}>
                        Explore
                    </Button>
                </div>
            </div>

            <div className="w-full overflow-hidden">
                <Slider {...settings}>
                    {reversedSlides.map((slide) => (
                        <div key={slide.campaignId} className='w-full'>
                            <Card className="w-full h-[70vh] relative" radius='none'>
                                <CardHeader className="absolute z-10 bottom-20 left-20 sm:left-72 flex-col !items-start w-[300px] sm:w-[600px]">
                                    <div className=''>
                                        <p className=" text-white opacity-75 text-2xl uppercase font-bold sm:text-5xl">{slide.title}</p>
                                        <h4 className="text-white font-medium text-xl sm:text-2xl mt-10">{slide.subtitle}</h4>
                                    </div>
                                </CardHeader>
                                <Image
                                    removeWrapper
                                    alt="Card background"
                                    className="z-0 w-full h-full object-cover opacity-80"
                                    src={slide.campaignCover}
                                    radius='none'
                                />
                            </Card>
                        </div>
                    ))}
                </Slider>

                <div className='mt-10 p-5 flex flex-col sm:flex-row justify-center justify-items-center gap-5'>
                    <div className='self-center '>
                        <Card className="p-5 w-72 bg-gradient-to-br from-orange-700 to-yellow-500">

                            <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                                <p className="text-base text-white font-medium mb-1">Start your experience:</p>
                            </CardHeader>
                            <CardBody className="overflow-visible py-2 flex flex-row justify-center justify-items-centerz">
                                <div className='flex flex-col justify-center'>
                                    <h4 className="font-bold font-mono text-xl me-3 text-white">Sign Up</h4>
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/200q0/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="0.8" stroke="currentColor" className="w-20 h-20 text-white">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                    </svg>
                                </div>
                            </CardBody>
                        </Card>
                    </div>

                    <div className=' self-center'>
                        <Card className="p-5 w-72 sm:w-96 bg-gradient-to-br from-fuchsia-500 to-blue-800">
                            <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                                <p className="text-base text-white font-medium mb-1">Do you have a project?</p>

                            </CardHeader>
                            <CardBody className="overflow-visible py-2 flex flex-row justify-center justify-items-centerz">
                                <div className='flex flex-col justify-center'>
                                    <h4 className="font-bold font-mono text-xl me-3 text-white">Launch your</h4>
                                    <h4 className="font-bold font-mono text-xl me-3 text-white">Project Fund</h4>
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.8" stroke="currentColor" class="w-20 h-20 text-white">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                                    </svg>

                                </div>
                            </CardBody>
                        </Card>
                    </div>
                    <div className='self-center'>
                        <Card className="p-5 w-72 bg-gradient-to-br from-sky-800 to-emerald-500">
                            <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                                <p className="text-base text-white font-medium mb-"><span>Check your campaign:</span></p>

                            </CardHeader>
                            <CardBody className="overflow-visible py-2 flex flex-row justify-center justify-items-centerz">
                                <div className='flex flex-col justify-center'>
                                    <h4 className="font-bold font-mono text-xl me-3 text-white">Check </h4>
                                    <h4 className="font-bold font-mono text-xl me-3 text-white">the funds</h4>
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.8" stroke="currentColor" class="w-[84px] h-[84px] text-white">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>

                                </div>
                            </CardBody>
                        </Card>
                    </div>
                </div>

            </div>



        </>
    );
};

export default Home;