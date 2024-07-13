
import {motion, MotionProps} from "framer-motion";
import { twMerge } from "tailwind-merge";

type props = {
    className? : string,
} & MotionProps;

const Block = ({ className, ...rest } : props) => {
    return (
        <motion.div 

        variants={{
            initial: { scale: 0.5, y: 50, opacity: 0 },
            animate: { scale: 1, y: 0, opacity: 1 },
        }}

        transition={{
           type: "spring",
           stiffness: 400,
           damping: 50,
           mass: 3,
        }}
        
        className={twMerge(" col-span-4 rounded-lg bg-zinc-800 p-6 border border-zinc-700", className)}
        {...rest}
        />
    
    )
};

export default Block;