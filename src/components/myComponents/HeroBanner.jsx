import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Button } from '../ui/button';
import MarqueeAnimation from './Marquee/Marquee';

const HeroBanner = () => {
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        const title = titleRef.current;
        const subtitle = subtitleRef.current;
        const button = buttonRef.current;

        // Set initial styles
        gsap.set([title, subtitle, button], { opacity: 0, y: 30 });

        // Animation timeline
        const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

        tl.fromTo(
            title,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1.5 }
        )
            .fromTo(
                subtitle,
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 1.5 },
                '-=1'
            )
            .fromTo(
                button,
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 1.5 },
                '-=1'
            );

    }, []);

    return (
        <div className='hero pb-10'>
            <div className='flex justify-center items-center text-[13vw] md:text-[160px] font-bold px-4 md:px-40 pt-20 md:pt-40 text-center text-white leading-none' ref={titleRef}>
                <h1>The internet is your canvas</h1>
            </div>
            <h2 className='text-xl px-4 text-neutral-300 md:text-3xl text-center py-5 md:py-10' ref={subtitleRef}> Framer is where teams design and publish stunning sites.</h2>

            <div className='flex justify-center items-center pt-3 md:pt-6' ref={buttonRef}>
                <Button className='text-lg text-white md:text-3xl bg-blue-400 md:bg-gradient-to-r from-slate-50 to-slate-100 md:text-black border-4 border-double border-blue-400 rounded-[20px] py-6 md:py-9 px-6 md:px-8'>Start for free today</Button>
            </div>
            <div className='md:bg-white/10 shadow-sm backdrop-blur-sm md:rounded-xl md:mx-10 my-20 md:mt-40 overflow-hidden object-cover md:p-10'>
                <img src="https://static.cdn.packhelp.com/wp-content/uploads/2018/09/06153907/kemptown_dark_design.jpg" className='md:rounded-xl w-full' alt="" />
            </div>
            <MarqueeAnimation />
        </div>
    );
};

export default HeroBanner;
