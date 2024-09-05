import Wrapper from "./Wrapper";
import { Button } from "../ui/button";

const Scale = () => {
    return (
        <div className="py-10 sm:py-20 md:py-40">
            <Wrapper>
                <div className="w-full sm:w-2/3">
                    <div className="py-5 sm:py-10">
                        <span className="text-blue-500 text-xl font-medium">Scale</span>
                    </div>
                    <h1 className="text-neutral-400 text-3xl sm:text-4xl md:text-5xl">
                        <span className="text-white">Scale your site to any size</span> with
                        the built-in CMS, AI-powered localization, and site maintenance
                        tools.
                    </h1>
                    <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-md sm:text-lg rounded-xl text-xl py-5 sm:py-7 px-8 sm:px-10 my-5 sm:my-10 ">
                        Start for free
                    </Button>
                </div>
                <div className="space-y-5 py-10">
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
                        <div className="w-full sm:w-[60%] h-[200px] sm:h-[400px] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl overflow-hidden ">
                            <img src="https://cdn.dribbble.com/userupload/13885127/file/original-7efb8f8285a96997bf74878a357cebb5.jpg?resize=1504x1133" alt="" />
                        </div>
                        <div className="w-full sm:w-[40%] h-[200px] sm:h-[400px] border border-neutral-700 rounded-2xl overflow-hidden">
                            <img src="https://cdn.dribbble.com/userupload/14114846/file/original-27bf191691a1c6551ba52ca112350318.png?resize=2048x1536" alt="" className="object-cover w-full h-full" />
                        </div>

                    </div>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
                        <div className="w-full sm:w-[40%] h-[200px] sm:h-[400px] border border-neutral-700 rounded-2xl overflow-hidden">
                            <div className="h-full bg-cover bg-center" style={{ backgroundImage: 'url(https://cdn.dribbble.com/userupload/14130563/file/original-2ef3ce8d0fd79a8e20b081325b449db9.jpg?resize=2048x1536)' }}></div>
                        </div>

                        <div className="w-full sm:w-[60%] h-[200px] sm:h-[400px] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl overflow-hidden">
                            <img src="https://cdn.dribbble.com/userupload/14087103/file/original-5cc6306f8232d70ce0832cfe376915d8.png?resize=1504x1128" alt="" />
                        </div>
                    </div>
                </div>
            </Wrapper>
        </div>
    );
};

export default Scale;
