import Image from "next/image";
import { title } from "../About";
import { useState } from "react";
import slImg from "../../assets/sertificate/sololearn/sertifikat JS sololearn.png";
import slImg1 from "../../assets/sertificate/sololearn/sertifikat React + Redux sololearn.png";
import slImg2 from "../../assets/sertificate/sololearn/sertifikat SQL sololearn.png";
import cpImg from "../../assets/sertificate/codepolitan/sk1.jpg";
import cpImg1 from "../../assets/sertificate/codepolitan/sk2.jpg";
import cpImg2 from "../../assets/sertificate/codepolitan/sk4.jpg";
import ddImg from "../../assets/sertificate/dicoding/dicoding.png";
import ddImg1 from "../../assets/sertificate/dicoding/dicoding1.png";
import ddImg2 from "../../assets/sertificate/dicoding/dicoding2.png";

const styles = {
  buttonTrue:
    "border border-b-2 border-blue-primary border-t-0 border-l-0 border-r-0 pb-1 lg:text-2xl font-semibold",
  buttonFalse:
    "border border-b-2 border-light border-t-0 border-l-0 border-r-0 pb-1 lg:text-2xl font-semibold",
  image: "object-cover border-2 border-blue-primary rounded-md",
  tabs: "grid lg:grid-cols-3 gap-3",
  modalContainer: "flex justify-center items-center mt-1",
  modalBtnOpen: "btn btn-accent text-white btn-sm rounded-sm",
  modalWidth: "modal-box w-11/12 max-w-5xl",
  modalBtnClose: "btn btn-sm btn-circle absolute right-2 top-2",
};

export default function Sertificate() {
  const [toggleState, setToggleState] = useState<number>(1);

  const handleClick = (index: any) => {
    setToggleState(index);
  };

  return (
    <div className="mt-5 py-10" id="sertificate">
      <h1 className={title}>Sertificate</h1>
      <div className="flex justify-center items-center gap-1">
        <div className="bg-blue-primary h-[1px] w-3"></div>
        <h1 className="text-blue-secondary italic text-center">
          Sertificate That I Have
        </h1>
        <div className="bg-blue-primary h-[1px] w-3"></div>
      </div>
      <div className="mx-10 mt-10">
        <div className="grid grid-cols-3 gap-5">
          <button
            className={
              toggleState === 1
                ? `${styles.buttonTrue}`
                : `${styles.buttonFalse}`
            }
            onClick={() => handleClick(1)}
          >
            Sololearn
          </button>
          <button
            className={
              toggleState === 2
                ? `${styles.buttonTrue}`
                : `${styles.buttonFalse}`
            }
            onClick={() => handleClick(2)}
          >
            Codepolitan
          </button>
          <button
            className={
              toggleState === 3
                ? `${styles.buttonTrue}`
                : `${styles.buttonFalse}`
            }
            onClick={() => handleClick(3)}
          >
            Dicoding
          </button>
        </div>
        <div className="flex justify-center items-center py-5">
          <div className={toggleState === 1 ? `${styles.tabs}` : "hidden"}>
            <div>
              <Image
                src={slImg}
                alt="Sertificate sololearn 1"
                className={styles.image}
              />
              <div className={styles.modalContainer}>
                {/* The button to open modal */}
                <label htmlFor="my-modal-3" className={styles.modalBtnOpen}>
                  View Certificate
                </label>

                {/* Put this part before </body> tag */}
                <input
                  type="checkbox"
                  id="my-modal-3"
                  className="modal-toggle"
                />
                <div className="modal">
                  <div className={styles.modalWidth}>
                    <label
                      htmlFor="my-modal-3"
                      className={styles.modalBtnClose}
                    >
                      ✕
                    </label>
                    <h3 className="text-lg font-bold">
                      Certifikate Js Sololearn
                    </h3>
                    <p className="py-4">
                      <Image
                        src={slImg}
                        alt="sertificate sololearn"
                        className="w-full object-cover"
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Image
                src={slImg1}
                alt="Sertificate sololearn 2"
                className={styles.image}
              />
              <div className={styles.modalContainer}>
                {/* The button to open modal */}
                <label htmlFor="my-modal-4" className={styles.modalBtnOpen}>
                  View Certificate
                </label>

                {/* Put this part before </body> tag */}
                <input
                  type="checkbox"
                  id="my-modal-4"
                  className="modal-toggle"
                />
                <div className="modal">
                  <div className={styles.modalWidth}>
                    <label
                      htmlFor="my-modal-4"
                      className={styles.modalBtnClose}
                    >
                      ✕
                    </label>
                    <h3 className="text-lg font-bold">
                      Certifikate React & Redux Sololearn
                    </h3>
                    <p className="py-4">
                      <Image
                        src={slImg1}
                        alt="sertificate React Redux sololearn"
                        className="w-full object-cover"
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Image
                src={slImg2}
                alt="Sertificate sololearn 2"
                className={styles.image}
              />
              <div className={styles.modalContainer}>
                {/* The button to open modal */}
                <label htmlFor="my-modal-5" className={styles.modalBtnOpen}>
                  View Certificate
                </label>

                {/* Put this part before </body> tag */}
                <input
                  type="checkbox"
                  id="my-modal-5"
                  className="modal-toggle"
                />
                <div className="modal">
                  <div className={styles.modalWidth}>
                    <label
                      htmlFor="my-modal-5"
                      className={styles.modalBtnClose}
                    >
                      ✕
                    </label>
                    <h3 className="text-lg font-bold">
                      Certifikate SQL Sololearn
                    </h3>
                    <p className="py-4">
                      <Image
                        src={slImg2}
                        alt="sertificate sololearn 3"
                        className="w-full object-cover"
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={toggleState === 2 ? `${styles.tabs}` : "hidden"}>
            <div>
              <Image
                src={cpImg}
                alt="Sertificate codepolitan 1"
                className={styles.image}
              />
              <div className={styles.modalContainer}>
                {/* The button to open modal */}
                <label htmlFor="my-modal-1" className={styles.modalBtnOpen}>
                  View Certificate
                </label>

                {/* Put this part before </body> tag */}
                <input
                  type="checkbox"
                  id="my-modal-1"
                  className="modal-toggle"
                />
                <div className="modal">
                  <div className={styles.modalWidth}>
                    <label
                      htmlFor="my-modal-1"
                      className={styles.modalBtnClose}
                    >
                      ✕
                    </label>
                    <h3 className="text-lg font-bold">
                      Certifikate Javascript Dasar Sololearn
                    </h3>
                    <p className="py-4">
                      <Image
                        src={cpImg}
                        alt="sertificate sololearn 3"
                        className="w-full object-cover"
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Image
                src={cpImg1}
                alt="Sertificate codepolitan 2"
                className={styles.image}
              />
              <div className={styles.modalContainer}>
                {/* The button to open modal */}
                <label htmlFor="my-modal-2" className={styles.modalBtnOpen}>
                  View Certificate
                </label>

                {/* Put this part before </body> tag */}
                <input
                  type="checkbox"
                  id="my-modal-2"
                  className="modal-toggle"
                />
                <div className="modal">
                  <div className={styles.modalWidth}>
                    <label
                      htmlFor="my-modal-2"
                      className={styles.modalBtnClose}
                    >
                      ✕
                    </label>
                    <h3 className="text-lg font-bold">
                      Certifikate HTML & CSS Sololearn
                    </h3>
                    <p className="py-4">
                      <Image
                        src={cpImg1}
                        alt="sertificate codepolitan 2"
                        className="w-full object-cover"
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Image
                src={cpImg2}
                alt="Sertificate codepolitan 3"
                className={styles.image}
              />
              <div className={styles.modalContainer}>
                {/* The button to open modal */}
                <label htmlFor="my-modal-6" className={styles.modalBtnOpen}>
                  View Certificate
                </label>

                {/* Put this part before </body> tag */}
                <input
                  type="checkbox"
                  id="my-modal-6"
                  className="modal-toggle"
                />
                <div className="modal">
                  <div className={styles.modalWidth}>
                    <label
                      htmlFor="my-modal-6"
                      className={styles.modalBtnClose}
                    >
                      ✕
                    </label>
                    <h3 className="text-lg font-bold">
                      Certifikate Javascript Async Sololearn
                    </h3>
                    <p className="py-4">
                      <Image
                        src={cpImg2}
                        alt="sertificate codepolitan 3"
                        className="w-full object-cover"
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={toggleState === 3 ? `${styles.tabs}` : "hidden"}>
            <div>
              <Image
                src={ddImg}
                alt="Sertificate dicoding"
                className={styles.image}
              />
              <div className={styles.modalContainer}>
                {/* The button to open modal */}
                <label htmlFor="my-modal-7" className={styles.modalBtnOpen}>
                  View Certificate
                </label>

                {/* Put this part before </body> tag */}
                <input
                  type="checkbox"
                  id="my-modal-7"
                  className="modal-toggle"
                />
                <div className="modal">
                  <div className={styles.modalWidth}>
                    <label
                      htmlFor="my-modal-7"
                      className={styles.modalBtnClose}
                    >
                      ✕
                    </label>
                    <h3 className="text-lg font-bold">
                      Belajar Dasar Pemrograman Web
                    </h3>
                    <p className="py-4">
                      <Image
                        src={ddImg}
                        alt="sertificate dicoding"
                        className="w-full object-cover"
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Image
                src={ddImg1}
                alt="Sertificate dicoding"
                className={styles.image}
              />
              <div className={styles.modalContainer}>
                {/* The button to open modal */}
                <label htmlFor="my-modal-8" className={styles.modalBtnOpen}>
                  View Certificate
                </label>

                {/* Put this part before </body> tag */}
                <input
                  type="checkbox"
                  id="my-modal-8"
                  className="modal-toggle"
                />
                <div className="modal">
                  <div className={styles.modalWidth}>
                    <label
                      htmlFor="my-modal-8"
                      className={styles.modalBtnClose}
                    >
                      ✕
                    </label>
                    <h3 className="text-lg font-bold">
                      Belajar Dasar Pemrograman Web
                    </h3>
                    <p className="py-4">
                      <Image
                        src={ddImg1}
                        alt="sertificate dicoding"
                        className="w-full object-cover"
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Image
                src={ddImg2}
                alt="Sertificate dicoding"
                className={styles.image}
              />
              <div className={styles.modalContainer}>
                {/* The button to open modal */}
                <label htmlFor="my-modal-9" className={styles.modalBtnOpen}>
                  View Certificate
                </label>

                {/* Put this part before </body> tag */}
                <input
                  type="checkbox"
                  id="my-modal-9"
                  className="modal-toggle"
                />
                <div className="modal">
                  <div className={styles.modalWidth}>
                    <label
                      htmlFor="my-modal-9"
                      className={styles.modalBtnClose}
                    >
                      ✕
                    </label>
                    <h3 className="text-lg font-bold">
                      Belajar Dasar Pemrograman Web
                    </h3>
                    <p className="py-4">
                      <Image
                        src={ddImg2}
                        alt="sertificate dicoding"
                        className="w-full object-cover"
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
