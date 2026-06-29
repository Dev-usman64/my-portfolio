import { useState } from "react";
import { OpenNewWindow } from 'iconoir-react';

export function Cards(props) {
    const [tilt, setTilt] = useState({ x: 0, y: 0 });
    const threshold = 12;

    const handleMove = (e) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;
        setTilt({ x: y * -threshold, y: x * threshold });
    };

    return (
        <div
            className=" border-b-3 border-blue-600 border-x-0 border-t-0 relative flex flex-col justify-between rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-300 ease-out cursor-pointer w-full h-[430px] bg-white border"
            onMouseMove={handleMove}
            onMouseLeave={() => setTilt({ x: 0, y: 0 })}
            style={{
                transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                transformStyle: "preserve-3d"
            }}
        >
            {/* Top Content Area */}
            <div>
                <div className="overflow-hidden h-52 w-full">
                    <img
                        src={props.img}
                        alt={props.title}
                        className="w-full h-full object-cover transition-transform 
                        duration-500 hover:scale-105 "
                    />
                </div>
                <div className="p-5">
                    <h3 className="text-xl font-semibold text-gray-900 tracking-tight mb-2">
                        {props.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
                        {props.description}
                    </p>
                </div>
            </div>

            {/* View More Button Container */}
            <div className="p-5 pt-0">
                <a
                    className="flex items-center justify-center gap-2 bg-black text-white text-sm font-medium w-full py-3 rounded-xl transition-colors duration-200"
                    href={props.url}
                    target="_blank"
                >
                    <span>Visit project</span>
                    <OpenNewWindow className="w-4 h-4" />
                </a>
            </div>
        </div>
    );
}