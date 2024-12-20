import aboutImg from "../assets/img.png";
import {ABOUT_TEXT, ABOUT_TEXT2, ABOUT_TEXT3} from "../constants";
import {motion} from "framer-motion";

const About = () => {
    return (
        <div
            className="border-b border-neutral-900 pb-4">
            <h2 className="my-20 text-center text-4xl">
                A propos de
                <span
                    className="text-neutral-500"> Moi</span>
            </h2>
            <div className="flex flex-wrap">
                <motion.div
                    whileInView={{
                        opacity: 1,
                        x: 0
                    }}
                    initial={{
                        opacity: 0,
                        x: -100
                    }}
                    transition={{duration: 0.5}}
                    className="w-full lg:w-1/2 lg:p-8"
                >
                    <div
                        className="flex items-center justify-center">
                        <img
                            className="rounded-2xl"
                            src={aboutImg}
                            alt="about"/>
                    </div>
                </motion.div>
                <motion.div
                    whileInView={{
                        opacity: 1,
                        x: 0
                    }}
                    initial={{opacity: 0, x: 100}}
                    transition={{duration: 0.5}}
                    className="w-full lg:w-1/2"
                >
                    <div
                        className="flex justify-center lg:justify-start">
                        <p className="mt-14 my-2 max-w-xl pt-6 font-light tracking-tighter text-xl">{ABOUT_TEXT}</p>
                    </div>
                    <div
                        className="flex justify-center lg:justify-start">
                        <p className="mt-10 my-2 max-w-xl pt-6 font-light tracking-tighter text-xl">{ABOUT_TEXT2}</p>
                    </div>
                    <div
                        className="flex justify-center lg:justify-start">
                        <p className="mt-10 my-2 max-w-xl pt-6 font-light tracking-tighter text-xl">{ABOUT_TEXT3}</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
