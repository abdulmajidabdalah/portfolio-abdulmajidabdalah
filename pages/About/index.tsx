import Image from "next/image";
import image from "../../assets/img/36.jpeg";

export const title = "text-4xl text-blue-primary text-center mt-8";
const styles = {
  headText: "flex lg:py-2 gap-3",
  titleText: "font-semibold lg:text-[20px]",
  textContent: "lg:text-[18px] text-sm flex justify-center items-center",
};

export default function About() {
  return (
    <div className="lg:py-10 py-10" id="about">
      <h1 className={title}>About</h1>
      <div className="flex justify-center items-center gap-1">
        <div className="bg-blue-primary h-[1px] w-3"></div>
        <h1 className="text-blue-secondary italic text-center">
          This is my biodata
        </h1>
        <div className="bg-blue-primary h-[1px] w-3"></div>
      </div>
      <div className="grid lg:grid-cols-3 gap-5 lg:mx-10 py-10 px-4">
        <div className="bg-blue-primary rounded-md lg:h-[400px] h-[200px]">
          <Image
            src={image}
            alt="image about"
            className="h-full px-2 py-2 object-cover rounded-md"
          />
        </div>
        <div className="col-span-2 lg:h-[300px] text-blue-primary text-lg lg:pt-6">
          <div>
            <h1 className="text-2xl">Hello</h1>
            <p className="lg:text-3xl font-semibold lg:mb-2">
              Introduce my name is Abdul Majid Abdalah
            </p>
            <h1 className="lg:text-[18px] text-[15px]">
              I am a recent graduate from a leading university in Indonesia
              (Bina Sarana Informatics University). I have interest and ability
              in web development especially in the front end. I also have the
              ability to work in a team or individually.
            </h1>
          </div>
          <div className="bg-blue-primary h-[2px] w-full my-2"></div>
          <div className="grid lg:grid-cols-2">
            <div className={styles.headText}>
              <p className={styles.titleText}>Name : </p>
              <p className={styles.textContent}>Abdul Majid Abdalah</p>
            </div>
            <div className={styles.headText}>
              <p className={styles.titleText}>Email : </p>
              <p className={styles.textContent}>
                abdulmajidabdalah27@gmail.com
              </p>
            </div>
            <div className={styles.headText}>
              <p className={styles.titleText}>Age : </p>
              <p className={styles.textContent}>25 Years Old</p>
            </div>
            <div className={styles.headText}>
              <p className={styles.titleText}>Address : </p>
              <p className={styles.textContent}>
                Jl. Asih Permai III No.15/16, Kota Bekasi
              </p>
            </div>
            <div className={styles.headText}>
              <p className={styles.titleText}>Status : </p>
              <p className={styles.textContent}>Single</p>
            </div>
            <div className={styles.headText}>
              <p className={styles.titleText}>Education : </p>
              <p className={styles.textContent}>Bachelor Digree</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
