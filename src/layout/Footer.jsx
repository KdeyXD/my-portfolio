import { Github, Linkedin, Mail } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white px-15 py-10 ">
      <div className="grid md:grid-cols-3 gap-5">
        <div>
          <p className="mb-2">Explore</p>
          <div className="inline-flex flex-col gap-2">
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/projects'>Projects</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/resume'>Resume</Link>
          </div>
        </div>
        <div>
          <p className="mb-2">Get in touch</p>
          <a href="mailto:sopheakdeychea2502@gmail.com">sopheakdeychea2502@gmail.com</a>
        </div>
        <div>
          <p>Connect</p>
          <div className="flex gap-5 mt-3">
            <a href="" className="p-3 bg-slate-800 rounded-full"><Github /></a>
            <a href="" className="p-3 bg-slate-800 rounded-full"><Linkedin /></a>
            <a href="" className="p-3 bg-slate-800 rounded-full"><Mail /></a>
          </div>
        </div>
      </div>
      <hr className="my-10"/>
      <div className=" flex flex-col md:flex-row justify-between items-center">
        <p>&copy;2025 Chea Sopheakdey. All rights reserved.</p>
        <p>Make with React + Tailwind</p>
      </div>
    </footer>
  );
};

export default Footer;
