import { SectionHead } from "./sectionhead"
import { Cards } from "./cards"

export function Protfolio() {
    const subtitle = "Portfolio"
    const title = "My Projects"
    const description = "Here are some of my recent projects. Each project is a testament to my commitment to quality and attention to detail."
    const cardData = [
        {
            id: 1,
            title: "Page of jobs",
            description: "Is a multi-purpose WordPress website that allows you to create listings for jobs and services.",
            img: "/pageofjopslogo.png",
            url: "https://pageofjobs.com"
        },
        {
            id: 2,
            title: "The Legal Gateway",
            description: "Is a legal consultancy website and i develope it using wordpress. luxury user interface and full resposicve design.",
            img: "/thelegalgateway.png",
            url: "https://thelegalgateway.com/"
        },
        {
            id: 3,
            title: "Satwa Mart",
            description: "Is a Electroinc store and i develope it using wordpress and woocommerce. Add to cart and cash on delivery main feature.",
            img: "/satwamart.png",
            url: "https://satwamart.com/"
        },
        {
            id: 4,
            title: "Fast Mobile Tyre Fitting",
            description: "Is a online booking website for mobile tyre fitting services in UK on main high-way.I develope this project using wordpress.",
            img: "/fastmobiletyrefitting.png",
            url: "https://fastmobiletyrefitting.co.uk/"
        },
        {
            id: 5,
            title: "Perth Gardening",
            description: "Is a online booking website for gardening services.I develope this project using wordpress and elementor.",
            img: "/perth.png",
            url: "perthgardening.co"
        },
        {
            id: 6,
            title: "Mgstc",
            description: "Is a portfolio website built with React and Tailwind CSS. Modren user interface and full resposicve design.",
            img: "/mgst.png",
            url: "mgstc.com"
        }
    ]
    return (
        <section className=" py-24 bg-[#eef1f6]">
            <div className="px-4 mx-auto max-w-5xl sm:px-6 lg:px-8">
                <SectionHead subtitle={subtitle} title={title} description={description} />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {cardData.map((data) => (
                        <Cards
                            key={data.id}
                            title={data.title}
                            description={data.description}
                            img={data.img}
                            url={data.url}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}