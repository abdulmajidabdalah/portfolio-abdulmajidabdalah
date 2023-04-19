import { title } from "../About";
import { CiMail } from "react-icons/ci";
import { SiMessenger, SiWhatsapp } from "react-icons/si";

const styles = {
  input:
    "input input-bordered input-info input-lg w-full text-sm focus:ring-0 focus:outline-none",
  card: "card w-80 bg-blue-primary hover:bg-blue-secondary border hover:border-info duration-300 text-neutral-content",
  cardBody: "py-3 space-y-2 items-center text-center",
  cardTitle: "card-title text-4xl flex justify-center",
  cardButton: "py-1 font-semibold hover:text-light",
  container: "flex justify-end items-center",
};

export default function Contact() {
  return (
    <div className="mt-10 pt-10 pb-28" id="contact">
      <h1 className={title}>Contact</h1>
      <div className="flex justify-center items-center gap-1">
        <div className="bg-blue-primary h-[1px] w-3"></div>
        <h1 className="text-blue-secondary italic text-center">
          Lets Talk With Me
        </h1>
        <div className="bg-blue-primary h-[1px] w-3"></div>
      </div>
      <div className="grid lg:grid-cols-3 lg:gap-10 mt-10">
        <div className="space-y-2">
          <div className={styles.container}>
            <div className={styles.card}>
              <div className={styles.cardBody}>
                <h2 className={styles.cardTitle}>
                  <CiMail />
                </h2>
                <h3>Email</h3>
                <h3>abdulmajidabdalah01@gmail.com</h3>
                <button className={styles.cardButton}>Send a Message</button>
              </div>
            </div>
          </div>
          <div className={styles.container}>
            <div className={styles.card}>
              <div className={styles.cardBody}>
                <h2 className={styles.cardTitle}>
                  <SiMessenger />
                </h2>
                <h3>Messenger</h3>
                <h3>Abdul Majid Abdalah</h3>
                <button className={styles.cardButton}>Send a Message</button>
              </div>
            </div>
          </div>
          <div className={styles.container}>
            <div className={styles.card}>
              <div className={styles.cardBody}>
                <h2 className={styles.cardTitle}>
                  <SiWhatsapp />
                </h2>
                <h3>Whatsapp</h3>
                <h3>+62 85782189711</h3>
                <button className={styles.cardButton}>Send a Message</button>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:pr-10 lg:mx-0 mx-5 lg:mt-0 mt-5 col-span-2">
          <form className="grid grid-cols-1 space-y-3">
            <input
              type="text"
              placeholder="Your Full Name"
              className={styles.input}
              space-y-3
              pr-5
              my-3
            />
            <input
              type="text"
              placeholder="Your Email"
              className={styles.input}
            />
            <textarea
              rows={7}
              className="textarea textarea-info w-full focus:ring-0 focus:outline-none"
              placeholder="Your Message"
            ></textarea>
            <button className="btn btn-active bg-blue-primary border-accent lg:w-56 text-white hover:bg-transparent hover:border-info hover:text-blue-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
