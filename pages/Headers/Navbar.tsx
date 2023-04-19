import { Link } from "react-scroll";

const styles = {
  list: "group relative cursor-pointer text-blue-secondary hover:text-blue-primary",
  listActive:
    "text-red-300 border-2 border-l-0 border-r-0 border-t-0 border-b-red-300",
  span: "absolute lg:block hidden duration-300 -bottom-1 left-0 w-0 h-[2px] bg-blue-primary group-hover:w-full group-hover:transition-all",
};

export default function Navbar() {
  return (
    <div className="lg:block hidden pb-8">
      <div className="navbar px-10 fixed bg-white z-50 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-sm">
        <div className="flex-1">
          <p className="normal-case text-xl font-righteous font-bold text-blue-primary tracking-wider">
            AMA_27
          </p>
        </div>
        <div className="flex-none">
          <ul className="flex gap-8 px-1">
            <li className={styles.list}>
              <Link to="home" spy={true} smooth={true} offset={0}>
                <p>Home</p>
              </Link>
              <span className={styles.span}></span>
            </li>
            <li className={styles.list}>
              <Link to="about" spy={true} smooth={true} offset={0}>
                <p>About</p>
              </Link>
              <span className={styles.span}></span>
            </li>
            <li className={styles.list}>
              <Link to="skills" spy={true} smooth={true} offset={0}>
                <p>Skills</p>
              </Link>
              <span className={styles.span}></span>
            </li>
            <li className={styles.list}>
              <Link to="portfolio" spy={true} smooth={true} offset={0}>
                <p>Portfolio</p>
              </Link>
              <span className={styles.span}></span>
            </li>
            <li className={styles.list}>
              <Link to="sertificate" spy={true} smooth={true} offset={0}>
                <p>Sertificate</p>
              </Link>
              <span className={styles.span}></span>
            </li>
            <li className={styles.list}>
              <Link to="contact" spy={true} smooth={true} offset={0}>
                <p>Contact</p>
              </Link>
              <span className={styles.span}></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
