import { useState } from "react";

export function Faq() {
    const faqData = [
        {
            id: 1,
            title: "What services do you offer?",
            ans: "I specialize in high-performance web development, offering custom React 19 applications, modern WordPress solutions (Elementor-based), and scalable SaaS platforms. I also develop desktop applications using Electron.js for businesses needing offline software."
        },
        {
            id: 2,
            title: "Do you build custom WordPress themes or use builders?",
            ans: "I focus on high-performance 'No-Code' and 'Low-Code' implementations using Elementor and theme customization. This allows for faster delivery and easy content management for clients, while ensuring the site remains optimized and SEO-friendly."
        },
        {
            id: 3,
            title: "Which technical stack do you use for web apps?",
            ans: "For modern web applications, I use a cutting-edge stack including React 19, Tailwind CSS v4, Vite, and TypeScript. This ensures your application is type-safe, lightning-fast, and easy to scale."
        },
        {
            id: 4,
            title: "Will my website be mobile-responsive and SEO-optimized?",
            ans: "Absolutely. I follow a mobile-first design approach and implement performance optimization techniques like WebP image formats and lazy loading to ensure high speed and better ranking on search engines."
        },
        {
            id: 5,
            title: "How do you handle project management and communication?",
            ans: "I believe in transparency. I use Git for version control and keep clients updated throughout the development process—from the initial workflow setup to the final deployment and performance testing."
        }
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-gray-50 py-24">
            <div className="px-4 mx-auto max-w-4xl sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <p className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-3">
                        FAQ
                    </p>
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Everything you need to know about my services, workflow, and technical expertise.
                    </p>
                </div>

                {/* FAQ Items */}
                <div className="space-y-4">
                    {faqData.map((data) => {
                        const isOpen = openIndex === data.id;
                        return (
                            <div
                                key={data.id}
                                className={`bg-white rounded-2xl shadow-sm border transition-colors duration-300 ${isOpen ? 'border-blue-200 ring-4 ring-blue-50' : 'border-gray-100 hover:border-blue-100'}`}
                            >
                                <button
                                    className="group flex items-center justify-between w-full px-6 py-5 text-left focus:outline-none cursor-pointer"
                                    onClick={() => toggleAccordion(data.id)}
                                >
                                    <h3 className={`text-lg font-semibold transition-colors duration-300 ${isOpen ? 'text-blue-600' : 'text-gray-900 group-hover:text-blue-600'}`}>
                                        {data.title}
                                    </h3>
                                    <span className={`ml-4 flex-shrink-0 transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-180 text-blue-600' : 'text-gray-400 group-hover:text-blue-400'}`}>
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </span>
                                </button>
                                <div
                                    className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                                >
                                    <div className="overflow-hidden">
                                        <p className="px-6 pb-6 text-gray-600 leading-relaxed text-base pt-1">
                                            {data.ans}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Contact CTA inside FAQ */}
                <div className="mt-12 text-center bg-blue-50 rounded-2xl p-8 border border-blue-100 shadow-inner">
                    <p className="text-blue-950 text-lg font-medium mb-3">Still have questions?</p>
                    <a href="https://wa.me/+923262859331" target='_blank' className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors cursor-pointer group">
                        Let's get in touch
                        <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}