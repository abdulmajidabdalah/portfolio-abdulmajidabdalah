import { title } from "../About";
import { portfolio } from "../../data/portfolio";
import Image from "next/image";

export default function Portfolio() {
  return (
    <div className="pt-10" id="portfolio">
      <h1 className={`${title}`}>Portfolio</h1>
      <div className="flex justify-center items-center gap-1">
        <div className="bg-blue-primary h-[1px] w-3"></div>
        <h1 className="text-blue-secondary italic text-center">
          My Recent Work
        </h1>
        <div className="bg-blue-primary h-[1px] w-3"></div>
      </div>
      <div className="grid lg:grid-cols-3 gap-5 mt-3 mx-5 lg:mx-10 py-10">
        {portfolio.map((item) => (
          <div
            className="px-6 py-6 text-white border border-blue-primary bg-blue-primary rounded-lg"
            key={item.id}
          >
            <Image
              src={item.image}
              alt={item.title}
              className="object-cover rounded-lg"
            />
            <div className="text-center">
              <h1>{item.title}</h1>
              <p>{item.description}</p>
            </div>
            <div className="flex justify-center items-center gap-2 mt-3">
              <button className="btn bg-white text-blue-primary hover:bg-blue-primary hover:text-white duration-200">
                <a href={item.github} target="_blank" rel="noreferrer">
                  Github Repo
                </a>
              </button>
              <a
                className="btn bg-blue-secondary text-white hover:bg-blue-primary duration-200"
                href={item.url}
                target="_blank"
                rel="noreferrer"
              >
                live demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
