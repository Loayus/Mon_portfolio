import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import CV_FR from '../assets/CV_Antoine_LEDOUX_FR.pdf';
import CV_EN from '../assets/CV_Antoine_LEDOUX_EN.pdf';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
        alert("Email copied to clipboard!");
    }).catch(err => {
        console.error("Failed to copy: ", err);
    });
};

const Contact = () => {
    return (
        <div className="border-b border-neutral-900 pb-20">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-10 text-center text-4xl text-white"
            >
                Contactez moi !
            </motion.h2>
            <div className="flex flex-col items-center space-y-6">
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 2 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg shadow-md transform transition-transform"
                >
                    <FaMapMarkerAlt className="text-2xl text-blue-500" />
                    <p className="px-4 py-2 text-left rounded bg-gray-700 hover:bg-gray-600">{CONTACT.address}</p>
                </motion.div>
                <motion.div
                    whileInView={{opacity: 1, x: 0}}
                    initial={{opacity: 0, x: 100}}
                    transition={{duration: 2}}
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                    className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg shadow-md transform transition-transform"
                >
                    <FaPhoneAlt className="text-2xl text-green-500"/>
                    <a href="tel:+33 7 43 30 93 48"
                       className="px-4 py-2 text-left rounded bg-gray-700 hover:bg-gray-600">
                        {CONTACT.phoneNo}
                    </a>
                </motion.div>
                <motion.div
                    whileInView={{opacity: 1, x: 0}}
                    initial={{opacity: 0, x: -100}}
                    transition={{duration: 2 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg shadow-md transform transition-transform"
                >
                    <FaEnvelope className="text-2xl text-red-500" />
                    <a href="mailto:ledouxantoine62@gmail.com" className="px-4 py-2 text-left rounded bg-gray-700 hover:bg-gray-600">
                        {CONTACT.email}
                    </a>
                </motion.div>
                <motion.div
                    whileInView={{opacity: 1, x: 0}}
                    initial={{opacity: 0, x: 100}}
                    transition={{duration: 2}}
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                    className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg shadow-md transform transition-transform"
                >
                    <a href={CV_FR} download
                       className="px-4 py-2 text-left rounded bg-gray-700 hover:bg-gray-600">
                        Télécharger CV Français
                    </a>
                    <a href={CV_EN} download
                       className="px-4 py-2 text-left rounded bg-gray-700 hover:bg-gray-600">
                        Télécharger CV Anglais
                    </a>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;