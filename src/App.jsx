import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import Sidebar from "./components/Slidebar.jsx";

const App = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (e.clientX < 50) {
                setIsSidebarOpen(true);
            } else {
                setIsSidebarOpen(false);
            }
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <Router>
            <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
                <div className="fixed top-0 -z-10 h-full w-full">
                    <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
                </div>

                <Sidebar />

                <div className="container mx-auto px-8 relative z-10">
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <>
                                    <section id="hero">
                                        <Hero />
                                    </section>
                                    <section id="about">
                                        <About />
                                    </section>
                                    <section id="technologies">
                                        <Technologies />
                                    </section>
                                    <section id="experience">
                                        <Experience />
                                    </section>
                                    <section id="projects">
                                        <Projects />
                                    </section>
                                    <section id="contact">
                                        <Contact />
                                    </section>
                                </>
                            }
                        />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;