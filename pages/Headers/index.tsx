import Navbar from "./Navbar";
import {
  AiOutlineLinkedin,
  AiOutlineDoubleRight,
  AiOutlineGithub,
} from "react-icons/ai";
import { TbBrandUpwork } from "react-icons/tb";
import image from "../../assets/img/16.jpeg";
import Image from "next/image";

export const styles = {
  buttonPrimary:
    "btn bg-blue-primary hover:bg-transparent hover:text-blue-primary hover:border-white duration-200",
  buttonSecondary:
    "btn bg-blue-secondary hover:bg-transparent hover:text-blue-primary hover:border-white duration-200",
};

export default function Headers() {
  return (
    <div>
      <Navbar />
      <div className="grid lg:grid-cols-5 gap-2 pb-14 pt-16" id="home">
        <div className="lg:flex justify-start ml-8 items-center hidden">
          <ul className="space-y-2 text-2xl text-blue-primary">
            <li className="hover:text-blue-secondary">
              <AiOutlineLinkedin />
            </li>
            <li className="hover:text-blue-secondary">
              <AiOutlineGithub />
            </li>
            <li className="hover:text-blue-secondary">
              <TbBrandUpwork />
            </li>
            <li>
              <div className="bg-blue-primary h-[1px] rotate-90 mt-5"></div>
            </li>
          </ul>
        </div>
        <div className="col-span-3 flex justify-center items-center">
          <div className="mockup-phone border-blue-primary lg:block hidden">
            <div className="camera"></div>
            <div className="display">
              <div className="artboard artboard-demo phone-1 bg-iphone bg-cover">
                <div className="text-white text-center font-semibold text-xl">
                  <div className="flex justify-center items-center lg:h-[300px] lg:w-full h-[230px] w-[230px] rounded-[50%] mb-2 mx-auto">
                    <Image
                      src={image}
                      alt="image profile"
                      className="lg:h-[200px] lg:w-[200px] h-[200px] w-[200px] object-cover rounded-[50%] duration-200 hover:scale-110"
                    />
                  </div>
                  <p>Hello</p>
                  <p className="text-xl font-bold leading-relaxed tracking-wide">
                    I Am Abdul Majid Abdalah
                  </p>
                  <p className="text-sm">
                    Front End Web Engineer | Web Designer
                  </p>
                  <div className="gap-2 flex justify-center mt-3">
                    <button className={styles.buttonPrimary}>Hire Me</button>
                    <button className={styles.buttonSecondary}>
                      Download CV
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-blue-secondary text-center font-semibold text-xl lg:hidden">
            <div className="flex justify-center items-center lg:h-[300px] lg:w-full h-[230px] w-[230px] rounded-[50%] mb-2 mx-auto">
              <Image
                src={image}
                alt="image profile"
                className="lg:h-[200px] lg:w-[200px] h-[200px] w-[200px] object-cover rounded-[50%] duration-200 hover:scale-110"
              />
            </div>
            <p>Hello</p>
            <p className="text-3xl font-bold leading-relaxed tracking-wide">
              I Am Abdul Majid Abdalah
            </p>
            <p className="text-sm">Front End Web Engineer | Web Designer</p>
            <div className="gap-2 flex justify-center mt-3">
              <button className={styles.buttonPrimary}>Hire Me</button>
              <button className={styles.buttonSecondary}>Download CV</button>
            </div>
          </div>
        </div>
        <div className="lg:flex justify-end items-center text-blue-primary hidden">
          <div className="rotate-90 right-3">
            <p className="flex items-center gap-2">
              Scroll To <AiOutlineDoubleRight />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
