import {MapContainer, TileLayer, Circle, Popup, CircleMarker} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import {HERO_CONTENT, HERO_CONTENT2} from "../constants";
import {motion} from "framer-motion";

const container = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: {
        x: 0,
        opacity: 1,
        transition: {duration: 0.5, delay: delay},
    },
});

const Hero = () => {
    const libercourtCoords = [50.482, 2.912]; // Coordinates for Libercourt, France
    const radius = 150000; // Radius in meters (150 km)

    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-36">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h2
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
                        >
                            Antoine Ledoux
                        </motion.h2>
                        <motion.span
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className="bg-gradient-to-r from-yellow-800 via-orange-700 to-red-700 bg-clip-text text-4xl tracking-tight text-transparent"
                        >
                            Développeur Junior
                        </motion.span>
                        <motion.p
                            variants={container(1)}
                            initial="hidden"
                            animate="visible"
                            className="my-2 max-w-xl pt-6 font-light tracking-tighter text-xl"
                        >
                            {HERO_CONTENT}
                        </motion.p>
                        <motion.p
                            variants={container(1)}
                            initial="hidden"
                            animate="visible"
                            className="my-2 max-w-xl pt-6 font-light tracking-tighter text-xl"
                        >
                            {HERO_CONTENT2}
                        </motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8 ">
                    <div className="flex justify-center pt-10">
                        <motion.div
                            initial={{x: 100, opacity: 0}}
                            animate={{x: 0, opacity: 1}}
                            transition={{duration: 1, delay: 1.2}}
                            className="w-full h-96 lg:h-[500px]" // Adjust the height here
                        >
                            <MapContainer
                                center={libercourtCoords}
                                zoom={6}
                                scrollWheelZoom={false}
                                style={{
                                    borderRadius: '20px', // Ajustez la valeur du rayon des bords
                                    overflow: 'hidden',   // Assurez que le contenu respecte le rayon
                                    width: '100%',        // Maintenir les dimensions
                                    height: '100%',       // Maintenir les dimensions
                                }}
                            >
                                <TileLayer
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                />
                                <Circle
                                    center={libercourtCoords}
                                    radius={radius}
                                    pathOptions={{color: 'red', fillColor: 'red', fillOpacity: 0.3}}
                                />
                                <CircleMarker center={libercourtCoords} radius={40} pathOptions={{color: 'black'}}>
                                    <Popup>Libercourt, France</Popup>
                                </CircleMarker>
                            </MapContainer>

                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;