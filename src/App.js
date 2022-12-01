import "./App.css";
import Forma from "./Form";
import { useState } from "react";

function App() {
  const [openForm, setOpen] = useState(false);

  return (
    <div className="App">
      {openForm && <Forma></Forma>}
      <div id="page">
        <div className="logo flex justify-center align-middle h-16">
          <img
            className=" lg:h-9 lg:w-24 mt-3"
            src={require("./ASSETS/Image 14.png")}
            alt="logo"
          />
        </div>
        <div className="communication lg:h-92.5 relative">
          <img
            className="  lg:h-92.5"
            src={require("./ASSETS/Bdtk_hero-banner.png")}
            alt=""
          />

          <div className="season flex justify-around flex-col md:top-1/3 lg:top-2/3 md:right-20 lg:right-40  sm:relative  mb-6 md:absolute md:h-56 md:w-1/2 lg:w-1/3 bg-white bg-opacity-50">
            <p className="ml-6">SEASON 2022</p>

            <h3 className="text-2xl font-bold ml-6"> Επικοινώνησε μαζί μας!</h3>

            <button
              onClick={() => {
                setOpen(true);

                document.getElementById("page").style.opacity = "0";
                window.scrollTo(0, 0);
              }}
              className=" ml-6 rounded-bl-lg rounded-tr-lg lg:h-12 lg:w-2/5 w-44 bg-black text-white inline-flex text-center font-medium text-sm px-3.5 py-3"
            >
              Συμπληρώστε την Φόρμα
              <svg
                aria-hidden="true"
                class="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <div className="galery">
          <div className="photos lg:flex flex-row justify-between ">
            <div className="photo_container flex flex-col justify-center lg:ml-28 ">
              <div className="texts text-center  sm:mx-auto font-bold text-xl underline ">
                PHOTO GALLERY
              </div>
              <div className="shop md:flex flex-row justify-between  ">
                <img
                  className="lg:w-72 lg:h-96 mr-10 "
                  src={require("./ASSETS/89d3dc629fb594d5c4b086291d00c2be.png")}
                  alt="red"
                />

                <img
                  className="lg:w-72 lg:h-96"
                  src={require("./ASSETS/e3667a77a6bc66c833e134ed92ebd8bd.png")}
                  alt="earth"
                />
              </div>
            </div>

            <div className="green relative">
              <button
                onClick={() => {
                  setOpen(true);

                  document.getElementById("page").style.opacity = "0";
                  window.scrollTo(0, 0);
                }}
                type="button"
                className=" green_b absolute top-3/4 left-1/3 text-black bg-white hover:bg-black hover:text-white focus:ring-4 focus:outline-none inline-flex focus:ring-blue-300 font-medium rounded-bl-lg rounded-tr-lg text-sm px-5 py-2.5 text-center "
              >
                <span>Συμπληρώστε την Φορμα</span>
                <svg
                  aria-hidden="true"
                  class="ml-2 -mr-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              <img
                className="space mt-12"
                src={require("./ASSETS/hd-wallpaper-g66c6fd997_1280.png")}
                alt="r0"
              />
            </div>
          </div>
        </div>
        <div className="two_photos flex flex-row pt-12">
          <img
            className="w-1/2 h-1/2"
            src={require("./ASSETS/Group 9.png")}
            alt="r1"
          />
          <img
            className="w-1/2 h-1/2"
            src={require("./ASSETS/Mask Group 8.png")}
            alt="r2"
          />
        </div>

        <div className="listes pt-20 text-xs lg:text-base flex flex-row justify-around lg:w-2/3">
          <ul className="lista1 ">
            <li>Τροποι Παραγγελίας</li>
            <li>Τροποι Αποστολής</li>
            <li>Επιστροφές και Αλλαγές</li>
            <li>Προστασία Δεδομένων</li>
            <li>Όροι χρήσης</li>
            <li>Ρυθμίσεις και Πολιτική</li>
            <li>Cookies</li>
          </ul>

          <ul className="lista2 ">
            <li>Η Εταιρεία</li>
            <li>Club 9</li>
            <li>Καταστήματα</li>
            <li>Συχνές Ερωτήσεις</li>
            <li>Newsletter Sign Up</li>
            <li>Εταιρική Πολιτική</li>
          </ul>

          <ul className="lista3 ">
            <li>Επικοινωνία</li>
            <li>Συνεργάτες</li>
            <li>Κεντρικά Γραφεία</li>
            <li>Θέσεις εργασίας</li>
          </ul>
        </div>
        <div className="footer flex flex-row justify-around pt-28 pb-3 ">
          <span> © 2022 All rights reserved.</span>
          <span>
            {" "}
            Designed and Developed by <span className="underline">
              Sleed
            </span>{" "}
          </span>
          <span>
            <span className="underline">Terms of Use</span> |{" "}
            <span className="underline"> Privacy Policy</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
