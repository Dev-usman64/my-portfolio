import { useState, useEffect } from "react";
import { motion } from "motion/react"
import { data } from "react-router-dom";

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            id: 1,
            tital: "A1 Executive Chauffeurs",
            img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            date: "2026-04-16",
            comment: "Working with this developer was fantastic. He build high performance booking system for my chauffeur company. I highly recommend him."
        },
        {
            id: 2,
            tital: "Page Of Jobs",
            date: "2026-04-16",
            img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            comment: "This developer built a modern, user-friendly interface for my job portal. The project was completed on time and exceeded expectations."
        }
    ];


    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
        }, 10000); // 10 seconds
        return () => clearInterval(timer);
    }, [testimonials.length]);

    return (
        <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8 bg-[url('/bg-testimonial.png')] bg-cover bg-center bg-no-repeat">


            <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--tw-gradient-from),white)] from-indigo-100 opacity-20 dark:from-indigo-500/10" />

            <div className="mx-auto max-w-2xl lg:max-w-4xl relative">

                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 3, ease: "easeInOut" }}
                >
                    <figure className="mt-10">

                        <div className="mt-4 flex flex-col items-center justify-center space-y-1 text-base">
                            <div className="font-bold text-gray-900 text-xl dark:text-white tracking-wide">
                                {testimonials[currentIndex].tital}
                            </div>
                            <div className="text-gray-400 font-medium text-sm">{testimonials[currentIndex].date}</div>
                        </div>
                        <blockquote className="text-center text-lg  
                        text-gray-900 sm:text-2xl/9 dark:text-white min-h-[160px] flex items-center justify-center">
                            <p>"{testimonials[currentIndex].comment}"</p>
                        </blockquote>

                        <figcaption className="mt-10">
                            {/* <img
                                alt={testimonials[currentIndex].tital}
                                src={testimonials[currentIndex].img}
                                className="mx-auto size-14 rounded-full border-2 border-indigo-500 p-0.5"
                            /> */}

                        </figcaption>
                    </figure>
                </motion.div>


                <div className="mt-5 flex justify-center space-x-3">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`h-2.5 transition-all duration-300 rounded-full ${currentIndex === index ? "w-8 bg-white" : "w-2.5 bg-gray-400"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}