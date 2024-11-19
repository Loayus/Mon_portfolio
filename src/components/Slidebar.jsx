import { useState, useEffect } from "react";
import Navbar from "./Navbar";

const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isMouseInSidebar, setIsMouseInSidebar] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (e.clientX < 50) {
                setIsSidebarOpen(true);
            } else if (!isMouseInSidebar) {
                setIsSidebarOpen(false);
            }
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [isMouseInSidebar]);

    return (
        <div className="relative">
            <Navbar />
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-gray-800 transition-transform duration-300 z-50 ${
                    isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                }`}
                onMouseEnter={() => setIsMouseInSidebar(true)}
                onMouseLeave={() => setIsMouseInSidebar(false)}
            >
                <div className="flex flex-col h-full p-4 text-white">
                    <h2 className="text-lg font-bold mb-4">Accueil</h2>
                    <button className="mb-4 px-4 py-2 text-left rounded bg-gray-700 hover:bg-gray-600"
                            onClick={() => document.getElementById('about').scrollIntoView({behavior: 'smooth'})}>
                        A propos
                    </button>
                    <button className="mb-4 px-4 py-2 text-left rounded bg-gray-700 hover:bg-gray-600"
                            onClick={() => document.getElementById('technologies').scrollIntoView({behavior: 'smooth'})}>
                        Technologies
                    </button>
                    <button className="mb-4 px-4 py-2 text-left rounded bg-gray-700 hover:bg-gray-600"
                            onClick={() => document.getElementById('experience').scrollIntoView({behavior: 'smooth'})}>
                        Experiences
                    </button>
                    <button className="mb-4 px-4 py-2 text-left rounded bg-gray-700 hover:bg-gray-600"
                            onClick={() => document.getElementById('projects').scrollIntoView({behavior: 'smooth'})}>
                        Projets
                    </button>
                    <button className="mb-4 px-4 py-2 text-left rounded bg-gray-700 hover:bg-gray-600"
                            onClick={() => document.getElementById('contact').scrollIntoView({behavior: 'smooth'})}>
                        Contact
                    </button>
                </div>
            </div>
            <div className="pt-20 ml-4 relative z-10">
            </div>
        </div>
    );
};

export default Sidebar;