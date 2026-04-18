import { ArrowRightCircle } from 'iconoir-react';

export function Hero() {
    return (
        <div className="bg-white mt-20">
            <section className="bg-opacity-30 pt-20 sm:py-16 lg:py-24">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-2">
                        <div className="w-full items-center">
                            <p className="text-base font-semibold text-center
                            md:text-left md:text-sm
                            lg:text-left lg:text-sm
                            xl:text-left
                            tracking-wider text-blue-600 uppercase">Hello World! </p>
                            <h1 className="mt-3 text-3xl font-bold text-black text-center
                            sm:text-4xl 
                            md:text-left md:text-4xl
                            lg:mt-4 lg:text-5xl lg:text-left
                            xl:text-left xl:text-6xl
                             ">
                                I'm A Professional Website Developer</h1>
                            <p className="mt-6 text-base text-gray-500 
                            text-center
                            sm:text-xl 
                            md:text-left md:text-lg
                            lg:mt- lg:text-left
                            xl:text-left 
                            ">I build responsive and user-friendly websites. Using modern technologies like React, Tailwind, TypeScript, WordPress & etc.</p>
                            <div className="flex justify-center align-middle
                            
                            md:justify-start
                            lg:justify-start
                            xl:justify-start
                            ">
                                <a
                                    href="https://wa.me/+923262859331"
                                    target='_blank'
                                    className="
                               bg-black  text-white px-5 rounded inline-flex justify-between w-40 py-2 hover:cursor-pointer
                               mt-6
                               sm:mt-6 sm:bg-black  sm:text-2xl
                               md:mt-6 md:text-lg
                               lg:mt-6 lg:text-lg
                               xl:mt-6 xl:text-lg
                               ">
                                    Let's talk
                                    <ArrowRightCircle className='' />
                                </a>
                            </div>
                        </div>

                        <div className=" flex justify-center-safe align-middle">

                            <img className="
                                w-fit  h-fit
                                sm:w-fit sm:h-fit 
                                lg:w-fit lg:h-fit
                                xl:w-fit xl:h-fit
                                 " height="90px" width="100px" src="/my-pic.png" alt="" />

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
