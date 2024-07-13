import HeaderBlock from "./HeaderBlock";
import SocialBlock from "./SocialBlock";
import AboutBlock from "./AboutBlock";
import EmailListBlock from "./EmailListBlock";
import LocationBlock from "./LocationBlock";
import { motion, } from "framer-motion";
import Footer from "./Footer";

const Bento = () => {
    return (
        <div className=" min-h-screen bg-zinc-900 px-4 py-12 text-zinc-50">
            <motion.div 
            initial='initial'
            animate='animate'
            transition={{
                staggerChildren: 0.05,
            }
            }
            className=" mx-auto max-w-4xl grid grid-cols-12 gap-4 ">
                <HeaderBlock />
                <SocialBlock />
                <AboutBlock />
                <LocationBlock />
                <EmailListBlock />
            </motion.div>
            <Footer />
        </div>
    );
};

export default Bento;