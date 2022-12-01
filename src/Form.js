import React from "react";
import "./App.css";
import { useState } from "react";
const Forma = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    ordercode: "",
    comments: "",
  });
  const [giveName, setFname] = useState("");
  const [giveLast, setLast] = useState("");
  const [giveCode, setCode] = useState("");
  const [giveComment, setComment] = useState("");
  const [giveEmail, setEmail] = useState("");

  function handleChange(event) {
    console.log(formData);

    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  function showValues() {
    setFname(formData.firstname);
    setLast(formData.lastname);
    setCode(formData.ordercode);
    setComment(formData.comments);
    setEmail(formData.email);
  }

  return (
    <div className="pageContainer relative">
      <div className="logo flex justify-center align-middle ,md:h-16 ">
        <img
          className=" md:h-9 md:w-24 mt-3"
          src={require("./ASSETS/Image 14.png")}
          alt="logo"
        />
      </div>
      <div className="arxiki pt-2.5  bg-gray-300">
        {" "}
        <span className="md:ml-8"> ΑΡΧΙΚΗ/ΦΟΡΜΑ ΕΠΙΚΟΙΝΩΝΙΑΣ</span>
      </div>
      <div className="back ">
        {" "}
        <img
          className=" md:h-56 w-full"
          src={require("./ASSETS/01.png")}
          alt="r1"
        />
      </div>

      <div className="md:flex flex-col lg:absolute top-64  left-1/4 ">
        <div className="forma_container bg-white md:flex  flex-col  lg:w-96 lg:h-96 shadow-xl shadow-slate-600">
          <h2 className=" md:text-center md:py-9 font-bold">
            {" "}
            Φόρμα Επικοινωνίας
          </h2>
          <div className=" md:ml-28 ">
            <form onSubmit={(e) => e.preventDefault()} className="">
              <select className="md:w-3/4 " name="selectbox" id="selectbox">
                <option> Επικοινωνία με το τμήμα προσωπικού</option>
              </select>

              <div className="input_containers ">
                <div className="first_row mt-4 ">
                  <input
                    required
                    className="md:w-1/3 "
                    type="text"
                    placeholder="Όνομα* "
                    onChange={handleChange}
                    name="firstname"
                    value={formData.firstname}
                  />
                  <input
                    required
                    className="md:w-1/3  ml-7"
                    type="text"
                    placeholder="Επώνυμο* "
                    onChange={handleChange}
                    name="lastname"
                    value={formData.lastname}
                  />
                </div>
                <div className="second_row mt-4">
                  <input
                    required
                    className="md:w-1/3"
                    type="text"
                    placeholder="Email* "
                    onChange={handleChange}
                    name="email"
                    value={formData.email}
                  />

                  <input
                    required
                    className="md:w-1/3  ml-7"
                    type="text"
                    placeholder="Κωδικός Παραγγελίας* "
                    onChange={handleChange}
                    name="ordercode"
                    value={formData.ordercode}
                  />
                </div>

                <div className="third_row flex flex-col mt-7">
                  <label htmlFor="comments" className=" font-bold">
                    {" "}
                    Μήνυμα{" "}
                  </label>
                  <textarea
                    className=" mt-4 resize-none md:w-3/4"
                    name="comments"
                    id="comments"
                    placeholder="Γράψε μας..."
                    onChange={handleChange}
                    value={formData.comments}
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>
                <div className="fourthrow ">
                  <span className=" font-light text-sm">
                    {" "}
                    *Όλα τα πεδία είναι υποχρεωτικά
                  </span>

                  <input
                    type="checkbox"
                    name="oroi"
                    className=" lg:ml-36"
                    required
                  />

                  <label htmlFor="oroi" className="text-sm">
                    {" "}
                    Αποδέχομαι τους{" "}
                    <span className="underline"> Όρους Χρήσης </span>
                  </label>
                </div>
                <div className="fifth_row md:flex flex-row-reverse  ">
                  <button
                    className=" mt-8 md:mr-24 rounded  h-12  bg-black text-white inline-flex text-center font-medium text-sm px-8 py-3 "
                    onClick={showValues}
                  >
                    Υποβολή
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
            </form>
          </div>{" "}
        </div>
        <br />
        <br />
        <br />
        <div className="forma_container2 bg-white flex  flex-col w-85 h-85 shadow-xl shadow-slate-600">
          <h2 className=" text-center py-9 font-bold"> Υποβληθέντα Στοιχεία</h2>
          <div className=" lg:ml-28 ">
            <form className="">
              <div className="input_containers ">
                <div className="first_row mt-20 ">
                  <input
                    readOnly
                    className="md:w-1/5 "
                    type="text"
                    placeholder="Όνομα* "
                    name="firstname"
                    value={giveName}
                  />
                  <input
                    readOnly
                    className="md:w-1/5 "
                    type="text"
                    placeholder="Επώνυμο* "
                    name="lastname"
                    value={giveLast}
                  />

                  <input
                    readOnly
                    className="md:w-1/5"
                    type="text"
                    placeholder="Email* "
                    name="email"
                    value={giveEmail}
                  />

                  <input
                    readOnly
                    className="w-1/5 "
                    type="text"
                    placeholder="Κωδικός Παραγγελίας* "
                    name="ordercode"
                    value={giveCode}
                  />
                </div>

                <div className="third_row flex flex-col mt-20">
                  <label htmlFor="comments" className=" font-bold">
                    {" "}
                    Μήνυμα{" "}
                  </label>
                  <textarea
                    readOnly
                    className=" mt-4 border-none outline-none resize-none w-3/4"
                    name="comments"
                    id="comments"
                    value={giveComment}
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>
              </div>
            </form>
          </div>{" "}
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

      <br />
      <br />
    </div>
  );
};

export default Forma;
