import { Github, Linkedin, Mail } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white p-5 md:p-15">
      <div className="grid md:grid-cols-3 gap-5">
        <div>
          <h2 className="mb-2 text-xl">Explore</h2>
          <div className="inline-flex flex-col gap-2">
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/projects'>Projects</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/resume'>Resume</Link>
          </div>
        </div>
        <div>
          <h2 className="mb-2 text-xl">Get in touch</h2>
          <a href="mailto:sopheakdeychea2502@gmail.com">sopheakdeychea2502@gmail.com</a>
        </div>
        <div>
          <h2 className="text-xl">Connect</h2>
          <div className="flex gap-5 mt-3">
            <a href="" className="p-3 bg-slate-800 rounded-full"><Github /></a>
            <a href="" className="p-3 bg-slate-800 rounded-full"><Linkedin /></a>
            <a href="" className="p-3 bg-slate-800 rounded-full"><Mail /></a>
          </div>
        </div>
      </div>
      <hr className="my-5"/>
      <div className=" flex flex-col md:flex-row justify-between items-center text-sm md:text-md">
        <p>&copy;2025 Chea Sopheakdey. All rights reserved.</p>
        <p>Make with React + Tailwind</p>
      </div>
    </footer>
  );
};

export default Footer;
