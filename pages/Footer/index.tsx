import { ImFacebook } from "react-icons/im";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";

const styles = {
  icons:
    "bg-blue-primary px-2 py-2 rounded-lg w-10 h-10 flex justify-center items-center border duration-300 hover:bg-white hover:border-blue-primary hover:text-blue-primary cursor-pointer",
  displayFlexCenter: "flex justify-center items-center lg:gap-10 gap-3 mt-10",
};

export default function Footer() {
  return (
    <div className="h-[50vh] bg-blue-secondary text-white py-10">
      <h1 className="text-center text-4xl">Abdul Majid Abdalah</h1>
      <div className={styles.displayFlexCenter}>
        <p>Home</p>
        <p>About</p>
        <p>Skills</p>
        <p>Portfolio</p>
        <p>Certificate</p>
        <p>Contact</p>
      </div>
      <div className={styles.displayFlexCenter}>
        <div className={styles.icons}>
          <p>
            <ImFacebook />
          </p>
        </div>
        <div className={styles.icons}>
          <p>
            <AiOutlineInstagram />
          </p>
        </div>
        <div className={styles.icons}>
          <p>
            <AiOutlineTwitter />
          </p>
        </div>
      </div>
      <h6 className="text-center text-sm my-10">
        &#169; Abdul Majid Abdalah 2022. All right reserved
      </h6>
    </div>
  );
}
