import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import newImage1 from "../assets/site.png";
import newImage2 from "../assets/puissance4.png";
import newImage3 from "../assets/portfolio.png";
import newImage4 from "../assets/flatcraft.png";
import ImageAttente from "../assets/pacman.png";

const Projects = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl"
            >
                Projets
            </motion.h2>
            <div className="flex flex-wrap justify-center">
                {PROJECTS.map((project, index) => (
                    <motion.div
                        key={index}
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 100 }}
                        transition={{ duration: 0.5 }}
                        className="project-card w-full lg:w-1/3"
                    >
                        <img
                            src={index === 0 ? newImage1 : index === 1 ? newImage2 : index === 2 ? newImage3 : index === 3 ? newImage4 : ImageAttente}
                            alt="Project Image"
                        />
                        <div className="project-card-content">
                            <h6 className="project-card-title">{project.title}</h6>
                            <p className="project-card-description">{project.description}</p>
                            <div>
                                {project.technologies.map((tech, index) => (
                                    <span key={index} className="project-card-tech">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Projects;