export function SectionHead(props) {
    return (
        <section>
            <div className="text-center mb-16">
                <p className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-3">
                    {props.subtitle}
                </p>
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl mb-4">
                    {props.title}
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    {props.description}
                </p>
            </div>
        </section>
    )
}