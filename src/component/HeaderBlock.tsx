import Block from "./Block";
import { FiArrowRight } from "react-icons/fi";

const HeaderBlock = () => {
  return (
    <Block className="col-span-12 row-span-2 md:col-span-6">
      <img
        src="https://api.dicebear.com/9.x/lorelei-neutral/svg?seed=Oreo"
        alt="avatar"
        className=" mb-4 size-14 rounded-full"
      />
      <h1 className="mb-12 text-4xl font-medium leading-tight">
        Hi, I'm Mohamed. {' '}
        <span className="text-zinc-400">
            I' build cool designs for you.
        </span>
      </h1>
      <a href="#" className="flex items-center gap-1 text-red-300 hover:underline">
        contact me <FiArrowRight />
      </a>
    </Block>
  );
};

export default HeaderBlock;
