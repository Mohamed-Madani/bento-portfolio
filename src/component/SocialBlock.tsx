
import { FaTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import Block from "./Block";
import { SiGithub } from "react-icons/si";

const SocialBlock = () => {
    return (
        <>
        <Block 
        whileHover={{
            rotate: "2.5deg",
            scale: 1.1
        }}

        className=" col-span-6 bg-[#1DA1F2] md:col-span-3" >
            <a href="https://x.com/itx_madani"
            className="grid h-full place-content-center text-3xl text-white">
                <FaTwitter />
            </a>
        </Block>

        <Block 
         whileHover={{
            rotate: "-2.5deg",
            scale: 1.1
        }}
        className=" col-span-6 bg-[#24292E] md:col-span-3" >
            <a href="https://github.com/Mohamed-Madani"
            className="grid h-full place-content-center text-3xl text-white">
                <SiGithub />
            </a>
        </Block>

        <Block 
         whileHover={{
            rotate: "2.5deg",
            scale: 1.1
        }}
        className=" col-span-6 bg-[#0077b5] md:col-span-3" >
            <a href="www.linkedin.com/in/mohamed-madani-rabiou"
            className="grid h-full place-content-center text-3xl text-white">
                <FaLinkedinIn />
            </a>
        </Block>
        <Block 
         whileHover={{
            rotate: "-2.5deg",
            scale: 1.1
        }}
        className=" col-span-6 bg-[#0084ff] md:col-span-3" >
            <a href="https://www.facebook.com/profile.php?id=61560355024908"
            className="grid h-full place-content-center text-3xl text-white">
                <FaFacebookF />
            </a>
        </Block>
        </>
    );
};

export default SocialBlock; 