import { AiOutlineHome } from "react-icons/ai";
import { SiAboutdotme } from "react-icons/si";
import {
  MdDesignServices,
  MdWorkHistory,
  MdOutlineContactSupport,
} from "react-icons/md";
import { FaAward } from "react-icons/fa";

export default function Navigation() {
  return (
    <div className="fixed bottom-3 flex justify-center items-center w-full">
      <div className="grid grid-cols-6 bg-dark-primary z-50 bg-opacity-60 backdrop-filter backdrop-blur-lg gap-7 text-white py-5 px-5 rounded-xl text-3xl">
        <p>
          <AiOutlineHome />
        </p>
        <p>
          <SiAboutdotme />
        </p>
        <p>
          <MdDesignServices />
        </p>
        <p>
          <MdWorkHistory />
        </p>
        <p>
          <FaAward />
        </p>
        <p>
          <MdOutlineContactSupport />
        </p>
      </div>
    </div>
  );
}
