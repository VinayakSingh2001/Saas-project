import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const useScrollFade = (ref) => {
    useEffect(() => {
        const element = ref.current;
        if (element) {
            gsap.fromTo(
                element,
                {
                    opacity: 0,
                    y: 100,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: element,
                        start: "top 80%",
                        end: "bottom 20%",
                        scrub: true,

                    },
                }
            );
        }
    }, [ref]);
};

const Projects = () => {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const ref5 = useRef(null);
    const ref6 = useRef(null);
    const ref7 = useRef(null);
    const ref8 = useRef(null);

    useScrollFade(ref1);
    useScrollFade(ref2);
    useScrollFade(ref3);
    useScrollFade(ref4);
    useScrollFade(ref5);
    useScrollFade(ref6);
    useScrollFade(ref7);
    useScrollFade(ref8);
    return (
        <div className="px-10 py-40  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div
                ref={ref1}
                className="rounded-xl border border-neutral-500 overflow-hidden aspect-w-16 aspect-h-9"
            >
                <img
                    src="https://cdn.dribbble.com/userupload/14010374/file/original-574f7f58bc617cde3ead054e32f991d0.png?resize=1504x1128"
                    className="object-cover w-full h-full"
                    alt=""
                />
            </div>
            <div
                ref={ref2}
                className="rounded-xl border border-neutral-500 overflow-hidden aspect-w-16 aspect-h-9"
            >
                <img
                    src="https://cdn.dribbble.com/userupload/12904549/file/original-2a65071336340c262d4b97af69b4d062.jpg?resize=1024x1024"
                    className="object-cover w-full h-full"
                    alt=""
                />
            </div>
            <div
                ref={ref3}
                className="rounded-xl border border-neutral-500 overflow-hidden aspect-w-16 aspect-h-9"
            >
                <img
                    src="https://cdn.dribbble.com/userupload/14030592/file/original-727f6b906fc75dd89a3b4ba0f1beca50.jpg?resize=1504x1128"
                    className="object-cover w-full h-full"
                    alt=""
                />
            </div>
            <div
                ref={ref4}
                className="rounded-xl border border-neutral-500 overflow-hidden aspect-w-16 aspect-h-9"
            >
                <img
                    src="https://cdn.dribbble.com/userupload/13942381/file/original-803d330739633b8af815ea9e13f0272d.jpeg?resize=2048x1648"
                    className="object-cover w-full h-full"
                    alt=""
                />
            </div>
            <div
                ref={ref5}
                className="rounded-xl border border-neutral-500 overflow-hidden aspect-w-16 aspect-h-9"
            >
                <img
                    src="https://cdn.dribbble.com/userupload/13948577/file/original-10cc92acd25b395e443ed7cc6a2cc3a9.png?resize=2048x1320"
                    className="object-cover w-full h-full"
                    alt=""
                />
            </div>
            <div
                ref={ref6}
                className="rounded-xl border border-neutral-500 overflow-hidden aspect-w-16 aspect-h-9"
            >
                <img
                    src="https://cdn.dribbble.com/userupload/13908251/file/original-8f6363057ce7e65bca48b597c40cdb62.png?resize=2048x1536"
                    className="object-cover w-full h-full"
                    alt=""
                />
            </div>
            <div
                ref={ref7}
                className="rounded-xl border border-neutral-500 overflow-hidden aspect-w-16 aspect-h-9"
            >
                <img
                    src="https://cdn.dribbble.com/userupload/13907127/file/original-8e59bb2906998e6f8b6292b690118294.png?resize=1200x1600"
                    className="object-cover w-full h-full"
                    alt=""
                />
            </div>
            <div
                ref={ref8}
                className="rounded-xl border border-neutral-500 overflow-hidden aspect-w-16 aspect-h-9"
            >
                <img
                    src="https://cdn.dribbble.com/userupload/13923186/file/original-1f146257e5bcb57595ab9ab4cc476704.png?resize=2048x1536"
                    className="object-cover w-full h-full"
                    alt=""
                />
            </div>
        </div>
    );
};

export default Projects;
