import { Button } from "../ui/button"
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Import ScrollTrigger


const DesignSite = () => {
    const gridRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin

        const grid = gridRef.current;

        const elements = grid.querySelectorAll('.fade-rise'); // Select elements with fade-rise class

        elements.forEach((element) => {
            gsap.set(element, { opacity: 0, y: 20 }); // Set initial styles

            gsap.fromTo(
                element,
                {
                    opacity: 0,
                    y: 20
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.5,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: element,
                        start: 'top 80%', // Adjust as needed
                        end: 'bottom top', // Adjust as needed
                        toggleActions: 'play none none reverse' // Adjust as needed
                    }
                }
            );
        });
    }, []);
    return (
        <>
            <div className="flex py-20 md:py-40 justify-center bg-[#121212dd]">

                <div className="grid grid-cols-1 md:grid-cols-2" ref={gridRef}>
                    <div className="md:hidden px-5 sm:order-1 fade-rise">
                        <div className="py-2">
                            <span className="text-blue-500 text-lg font-medium">Design</span>
                        </div>
                        <h1 className="text-3xl font-semibold text-white mr-10">Design stunning sites on a familiar canvas.</h1>
                    </div>
                    <div className="pl-5 md:pl-40 pr-10 sm:order-3 md:order-1 fade-rise">
                        <div className="hidden md:flex md:flex-col">
                            <div className="py-10">
                                <span className="text-blue-500 text-xl font-medium">Design</span>
                            </div>
                            <h1 className="text-5xl font-semibold text-white">Design stunning sites on a familiar canvas.</h1>
                        </div>

                        <div className="text-white pt-8 pb-4 fade-rise">
                            <div>
                                <h2 className="text-2xl pb-4">Layout</h2>
                                <p className="text-lg text-neutral-400">Use powerful yet familiar tools to create your ultimate website design. Import your designs from Figma.</p>
                            </div>
                        </div>
                        <div className="text-white py-2 fade-rise">
                            <div>
                                <h2 className="text-2xl pb-4">Layout</h2>
                                <p className="text-lg text-neutral-400">Use powerful yet familiar tools to create your ultimate website design. Import your designs from Figma.</p>
                            </div>
                        </div>
                        <div className="text-white py-2 fade-rise">
                            <div>
                                <h2 className="text-2xl pb-4">Layout</h2>
                                <p className="text-lg text-neutral-400">Use powerful yet familiar tools to create your ultimate website design. Import your designs from Figma.</p>
                            </div>
                            <Button className='bg-gradient-to-r from-cyan-500 to-blue-500  text-md rounded-xl text-xl py-7 px-10 my-10 border'>Start for free</Button>
                        </div>
                    </div>
                    <div className="h-[400px] sm:h-[200px] md:h-[600px] lg:h-[700px] md:border md:border-neutral-600 relative md:rounded-l-2xl overflow-hidden sm:order-2 md:order-2 fade-rise">
                        <img src="https://wallpapercave.com/wp/wp2687158.jpg" className="absolute inset-0 w-full h-full object-cover" alt="" />
                    </div>
                </div>

            </div>
        </>
    )
}

export default DesignSite
