import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Import ScrollTrigger
import { Button } from '../ui/button';
import Wrapper from './Wrapper';
import { Avatar } from '../ui/avatar';


const PublishSite = () => {
    const gridRef = useRef(null);

    const upperDivRef = useRef(null);
    const lowerDivRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin

        const grid = gridRef.current;

        const elements = grid.querySelectorAll('.fade-rise'); // Select elements with fade-rise class

        elements.forEach((element) => {
            gsap.set(element, { opacity: 0, y: 50 }); // Set initial styles

            gsap.fromTo(
                element,
                {
                    opacity: 0,
                    y: 50
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

        // GSAP timeline for animation
        const tl = gsap.timeline();

        tl.fromTo(upperDivRef.current, { x: 0 }, {
            x: 550, duration: 3, scrollTrigger: {
                trigger: upperDivRef.current,
                start: 'top center', // Adjust as needed
                end: 'bottom center', // Adjust as needed
                scrub: true,
                ease: 'power3.out',
              
            }
        }); // Move upper div to the left
        tl.fromTo(lowerDivRef.current, { x: 0 }, {
            x: -550, duration: 3, scrollTrigger: {
                trigger: upperDivRef.current,
                start: 'top center', // Adjust as needed
                end: 'bottom center', // Adjust as needed
                scrub: true,
                ease: 'power3.out',
              
            }
        }); // Move lower div to the right
    }, []);

    return (
        <div className="py-10 sm:py-20 md:py-40">
            <Wrapper>
                <div className="w-full sm:w-2/3">
                    <div className="py-5 sm:py-10">
                        <span className="text-blue-500 text-xl font-medium">Publish</span>
                    </div>
                    <h1 className="text-neutral-400 text-3xl sm:text-4xl md:text-5xl">
                        <span className="text-white">Deploy in seconds.</span> Your site is fast out of the box and
                        automatically optimized for search engines.
                    </h1>
                    <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-md sm:text-lg rounded-xl text-xl py-5 sm:py-7 px-8 sm:px-10 my-5 sm:my-10">
                        Start for free
                    </Button>
                </div>

                <div className="relative my-10 sm:my-20 md:mx-20">
                    <div className="absolute inset-0 md:rounded-xl md:border border-neutral-600 overflow-hidden" ref={upperDivRef}>
                        <img src="https://c1.wallpaperflare.com/preview/447/98/399/axe-bodyspray-artistic-cologne-smell.jpg" alt="" className="w-full" />
                    </div>

                    <div className="relative">
                        <div className="rounded-xl border border-neutral-600 overflow-hidden" ref={lowerDivRef}>
                            <img src="https://plecto-website-2020.s3.amazonaws.com/images/CC_New.max-1280x960.png" alt="" className="w-full" />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-40 sm:px-5 md:px-10" ref={gridRef}>
                    <div className="flex gap-4 fade-rise">
                        <Avatar className=' text-neutral-500 text-xl border-neutral-500 border-2 flex justify-center items-center'>01</Avatar>
                        <h1 className="text-neutral-400 text-lg sm:text-xl">
                            <span className="text-white">Just hit Publish.</span> Keep track of your team’s changes and see them get optimized and pushed to production in a matter of seconds.
                        </h1>
                    </div>
                    <div className="flex gap-4 fade-rise">
                        <Avatar className='border-2 text-neutral-500 text-xl border-neutral-500 flex justify-center items-center'>02</Avatar>
                        <h1 className="text-neutral-400 text-lg sm:text-xl">
                            <span className="text-white">Your site will be live instantly.</span> Using the latest web technologies and every trick in the book, you’ll get great performance from the start.
                        </h1>
                    </div>
                </div>
            </Wrapper>
        </div>
    );
};

export default PublishSite;
