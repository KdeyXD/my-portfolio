import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const inputStyle =
    "ring ring-slate-300 focus:ring-2 focus:ring-blue-400 w-full rounded-lg px-4 py-2 outline-none";
  const getinStyle = 'p-3 border rounded-lg bg-slate-800/80 mt-3'
  return (
    <div className="text-slate-300">
      <div className="text-center p-10">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          libero inventore quidem expedita id quasi odit voluptate accusamus ea
          reiciendis.
        </p>
      </div>
      <div className="grid md:grid-cols-2 p-5 gap-5">
        <div>
          <h2 className="text-2xl font-bold">Get in Touch</h2>
          <p className={getinStyle}>Email: sopheakdeychea2502@gmail.com</p>
          <p className={getinStyle}>Phone: 0960764313</p>
          <p className={getinStyle}>Address: Beoung Keng Kang 1, Beoung Keng Kang, Phnom Penh</p>
        </div>
        <div className="">
          <div className="p-5 rounded-xl bg-slate-800/70 backdrop-blur-md">
            <h2 className="text-2xl font-bold">Send a Message</h2>
            <form action="">
              <div className="grid md:grid-cols-2 md:gap-3">
                <div className="mb-3">
                  <label htmlFor="" className="block">
                    Name
                  </label>
                  <input className={inputStyle} type="text" />
                </div>
                <div className="mb-3">
                  <label htmlFor="" className="block">
                    Email
                  </label>
                  <input className={inputStyle} type="email" />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="" className="block">
                  Subject
                </label>
                <input className={inputStyle} type="text" />
              </div>
              <div>
                <label htmlFor="" className="block">
                  Message
                </label>
                <textarea
                  className={`${inputStyle} resize-none h-45`}
                ></textarea>
              </div>
              <button className="bg-blue-600 w-full p-2 rounded-lg mt-3">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
