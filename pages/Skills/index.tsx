import { AiOutlineHtml5, AiOutlineGithub } from "react-icons/ai";
import {
  SiCss3,
  SiRedux,
  SiNextdotjs,
  SiMysql,
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
  SiFirebase,
} from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { BsGit } from "react-icons/bs";
import { title } from "../About";

import Image from "next/image";
import img from "../../assets/img/teamwork.png";
import img1 from "../../assets/img/communication.png";
import img2 from "../../assets/img/solving.png";
import img3 from "../../assets/img/analytical.png";

const styles = {
  cardGroup:
    "flex justify-center items-center px-2 py-2 rounded-lg border border-blue-primary group relative",
  groupHover:
    "hidden absolute top-0 left-0 w-full h-0 lg:flex flex-col justify-center items-center bg-blue-secondary opacity-0 group-hover:h-full group-hover:rounded-md group-hover:opacity-80 group-hover:cursor-pointer duration-500",
  cardText: "text-center text-sm text-blue-primary",
  hoverText: "text-white text-lg font-bold",
  cardLeft: "text-center px-1 rounded-md",
  textLeft: "lg:text-lg -mt-2 mb-2 font-bold",
};

export default function Skills() {
  return (
    <div className="lg:py-10" id="skills">
      <h1 className={title}>Skills</h1>
      <div className="flex justify-center items-center gap-1">
        <div className="bg-blue-primary h-[1px] w-3"></div>
        <h1 className="text-blue-secondary italic text-center">
          This is my skills
        </h1>
        <div className="bg-blue-primary h-[1px] w-3"></div>
      </div>
      <div className="grid lg:grid-cols-2 lg:mx-4 py-8">
        <div className="px-4 text-blue-primary">
          <h1 className="text-center text-2xl">Soft Skills</h1>
          <p className="lg:text-lg text-[15px]">
            I have several soft skills to support my work as a front end
            engineer, which in every job these soft skills are no less important
            than hard skills, here are some of the soft skills that I have :
          </p>
          <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-2 lg:mt-4">
            <div className={styles.cardLeft}>
              <Image src={img} alt="teamwork image" />
              <p className={styles.textLeft}>Teamwork</p>
            </div>
            <div className={styles.cardLeft}>
              <Image src={img1} alt="communication image" />
              <p className={styles.textLeft}>Communication</p>
            </div>
            <div className={styles.cardLeft}>
              <Image src={img2} alt="solving image" />
              <p className={styles.textLeft}>Problem Solving</p>
            </div>
            <div className={styles.cardLeft}>
              <Image src={img3} alt="communication image" />
              <p className={styles.textLeft}>Analytical</p>
            </div>
          </div>
        </div>
        <div className="lg:mt-0 mt-6">
          <h1 className="text-center text-2xl text-blue-primary">
            Hard Skills
          </h1>
          <div className="grid grid-cols-4 px-2 py-3 gap-2">
            <div className={styles.cardGroup}>
              <div>
                <AiOutlineHtml5 className="text-6xl text-orange-400" />
                <p className={styles.cardText}>HTML</p>
              </div>
              <div className={styles.groupHover}>
                <p className={styles.hoverText}>80%</p>
              </div>
            </div>
            <div className={styles.cardGroup}>
              <div>
                <SiCss3 className="text-6xl text-primary" />
                <p className={styles.cardText}>CSS</p>
              </div>
              <div className={styles.groupHover}>
                <p className={styles.hoverText}>80%</p>
              </div>
            </div>
            <div className={styles.cardGroup}>
              <div>
                <SiJavascript className="text-6xl text-yellow-300" />
                <p className={styles.cardText}>Javascript</p>
              </div>
              <div className={styles.groupHover}>
                <p className={styles.hoverText}>70%</p>
              </div>
            </div>
            <div className={styles.cardGroup}>
              <div>
                <FaReact className="text-6xl text-blue-primary" />
                <p className={styles.cardText}>React</p>
              </div>
              <div className={styles.groupHover}>
                <p className={styles.hoverText}>70%</p>
              </div>
            </div>
            <div className={styles.cardGroup}>
              <div>
                <SiRedux className="text-6xl text-primary" />
                <p className={styles.cardText}>Redux</p>
              </div>
              <div className={styles.groupHover}>
                <p className={styles.hoverText}>70%</p>
              </div>
            </div>
            <div className={styles.cardGroup}>
              <div>
                <SiNextdotjs className="text-6xl text-black" />
                <p className={styles.cardText}>Next js</p>
              </div>
              <div className={styles.groupHover}>
                <p className={styles.hoverText}>70%</p>
              </div>
            </div>
            <div className={styles.cardGroup}>
              <div>
                <SiMysql className="text-6xl text-primary" />
                <p className={styles.cardText}>MySql</p>
              </div>
              <div className={styles.groupHover}>
                <p className={styles.hoverText}>40%</p>
              </div>
            </div>
            <div className={styles.cardGroup}>
              <div>
                <SiTailwindcss className="text-6xl text-blue-primary" />
                <p className={styles.cardText}>Tailwind</p>
              </div>
              <div className={styles.groupHover}>
                <p className={styles.hoverText}>70%</p>
              </div>
            </div>
            <div className={styles.cardGroup}>
              <div>
                <SiBootstrap className="text-6xl text-primary" />
                <p className={styles.cardText}>Bootstrap</p>
              </div>
              <div className={styles.groupHover}>
                <p className={styles.hoverText}>70%</p>
              </div>
            </div>
            <div className={styles.cardGroup}>
              <div>
                <BsGit className="text-6xl text-orange-500" />
                <p className={styles.cardText}>Git</p>
              </div>
              <div className={styles.groupHover}>
                <p className={styles.hoverText}>70%</p>
              </div>
            </div>
            <div className={styles.cardGroup}>
              <div>
                <AiOutlineGithub className="text-6xl text-black" />
                <p className={styles.cardText}>Github</p>
              </div>
              <div className={styles.groupHover}>
                <p className={styles.hoverText}>70%</p>
              </div>
            </div>
            <div className={styles.cardGroup}>
              <div>
                <SiFirebase className="text-6xl text-orange-400" />
                <p className={styles.cardText}>Firebase</p>
              </div>
              <div className={styles.groupHover}>
                <p className={styles.hoverText}>50%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
