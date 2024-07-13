import Block from "./Block";

const AboutBlock = () => {
    return (
        <Block className=" col-span-12 text-3xl leading-snug" >
            <p>
                My passion is to create cool stuff.{" "}
                <span className="text-zinc-400">
                    I design with Figma, Adobe Photoshop, and Framer. I love creating some cool designs which talk without speaking. I've made over a hundred of design projects and I'm always looking for new challenges.
                </span>
            </p>

        </Block> )
};

export default AboutBlock;