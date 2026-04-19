export function Skills() {

    const skills = [
        {
            id: 1,
            title: "CMS Solutions",
            img: "../public/iconpng/wordpress-icon.png",
            desc: "Professional WordPress & Elementor specialist.",
            gradient: "from-[#34d399] to-[#0f766e]", // green
            shadow: "shadow-green-300"
        },
        {
            id: 2,
            title: "React Dev",
            img: "../public/iconpng/react-icon.png",
            desc: "High-performance apps using React 19.",
            gradient: "from-[#1e40af]  to-[#312e81]", // blue
            shadow: "shadow-blue-300"
        },
        {
            id: 3,
            title: "Modern Styling",
            img: "../public/iconpng/tailwind-icon.png",
            desc: "Clean UIs with help of Tailwind CSS.",
            gradient: "from-[#fb7185] to-[#ef4444]", // rose
            shadow: "shadow-rose-300"
        },
        {
            id: 4,
            title: "Scalable Logic",
            img: "../public/iconpng/typescript-icon.png",
            desc: "Type-safe code with TypeScript for Apps.",
            gradient: "from-[#a855f7] to-[#581c87]", // purple
            shadow: "shadow-purple-300"
        }
    ];

    return (
        <>
            <section className="bg-[#eef1f6] ">
                <div className="px-4 mx-auto max-w-7xl 
                sm:px-6 
                lg:px-8     ">
                    <div className="text-center
                    pt-20">
                        <p className="text-base font-semibold text-center
                            md:text-center md:text-sm
                            lg:text-center lg:text-sm
                            xl:text-center xl:text-md
                            tracking-wider text-blue-600 uppercase">My Skills </p>
                        <h1 className="text-3xl font-bold text-black text-center
                            sm:text-3xl 
                            md:text-center md:text-3xl
                            lg:mt-4 lg:text-4xl lg:text-center
                            xl:text-center xl:text-5xl
                             ">
                            Core Tech & Tools
                        </h1>
                        <p className="mt-6 text-base text-gray-500 
                            text-center
                            sm:text-xl 
                            md:text-center md:text-lg
                            lg:mt- lg:text-center
                            xl:text-center 
                            ">I build seamless digital experiences using modern, industry-leading web tools.</p>
                    </div>
                    <div className=" py-20 ">

                        <div className="w-full items-center">
                            <div className="grid grid-cols-1 
                            
                            sm:grid-cols-2 
                            lg:grid-cols-4 gap-6 p-4 items-center">
                                {skills.map((skill) => (
                                    <div key={skill.id} className="p-7 rounded-lg items
                                    w-full h-70
                                    bg-white border border-gray-200  shadow-sm hover:shadow-2xl transition-shadow duration-300">
                                        <div className={`w-17 h-17 mx-auto p-2 mt-5 shadow-lg ${skill.shadow} 
                                        rounded-2xl bg-gradient-to-br ${skill.gradient}
                                        flex items-center justify-center mb-4`}>
                                            <img src={skill.img} alt="" />
                                        </div>
                                        <h3 className="text-xl text-center mt-8 font-bold mb-2">{skill.title}</h3>
                                        <p className="text-gray-600 text-center mt-2 text-md">{skill.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>


                    </div>
                </div>
            </section>
        </>
    )
}