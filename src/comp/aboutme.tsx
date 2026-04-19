import { div } from "motion/react-client";

export function AboutMe() {
    return (
        <div className="bg-white mt-20 pb-20 ">
            <section className="bg-opacity-30 pt-20 sm:py-16 sm:pt-20 lg:py-24 lg:pt-20">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-2">
                        <div className=" flex justify-center-safe align-middle">

                            <img className="
                                        rounded-lg
                                        w-fit  h-fit
                                        sm:w-fit sm:h-fit 
                                        lg:w-fit lg:h-fit
                                        xl:w-fit xl:h-fit
                                         " height="90px" width="100px" src="/about-section.png" alt="" />

                        </div>

                        <div className="w-full items-center">
                            <p className="text-base font-semibold text-center
                                    md:text-left md:text-sm
                                    lg:text-left lg:text-sm
                                    xl:text-left
                                    tracking-wider text-blue-600 uppercase">About Me </p>
                            <h1 className="mt-3 text-3xl font-bold text-black text-center
                                    sm:text-3xl 
                            md:text-left md:text-3xl
                            lg:mt-4 lg:text-4xl lg:text-left
                            xl:text-left xl:text-5xl
                                     ">
                                Modern Web Solutions through Code & Logic</h1>
                            <p className="mt-6 text-base text-gray-500 
                                    text-center
                                    sm:text-xl 
                                    md:text-left md:text-lg
                                    lg:mt- lg:text-left
                                    xl:text-left 
                                    ">I am a results-driven Frontend Developer and WordPress Specialist with over 3 years of extensive experience in building high-performance digital solutions. My expertise lies in crafting scalable SaaS applications, dynamic e-commerce stores, and high-end portfolios using modern technologies like React 19, Tailwind CSS, and Framer Motion for seamless user experiences. By bridging the gap between professional WordPress architecture and custom React-driven logic, I deliver technically optimized websites that prioritize both speed and business growth.</p>
                            <p className="mt-6 text-base text-gray-500 
                                    text-center
                                    sm:text-xl 
                                    md:text-left md:text-lg
                                    lg:mt- lg:text-left
                                    xl:text-left 
                                    ">I focus on strategic development—from custom Inventory Systems to Electron.js desktop apps. My priority is clean, maintainable architecture that ensures your business assets remain scalable and perform flawlessly under heavy traffic.</p>

                            {/* <div className="flex justify-center align-middle
                                    
                                    md:justify-start
                                    lg:justify-start
                                    xl:justify-start
                                    ">
                                <button className="
                                       bg-black  text-white px-5 rounded inline-flex justify-between w-40 py-2 hover:cursor-pointer
                                       mt-6
                                       sm:mt-6 sm:bg-black  sm:text-2xl
                                       md:mt-6 md:text-lg
                                       lg:mt-6 lg:text-lg
                                       xl:mt-6 xl:text-lg
                                       ">
                                    Let's Start
                                </button>
                            </div> */}
                        </div>


                    </div>
                </div>
            </section>
        </div>
    )
}