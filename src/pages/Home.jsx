import React from "react";
import { Github, Mail, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main>
      <section className="h-[90dvh] text-white px-5">
        <div className="container m-auto flex flex-col-reverse md:flex-row items-center justify-center min-h-full md:gap-10">
          {/* Text Content */}
          <div className=" text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-indigo-300 to-purple-400 text-transparent bg-clip-text">
              Front-end Web Developer
            </h1>
            <p className="mt-4 text-white md:text-lg max-w-md mx-auto md:mx-0">
              Hi, I'm <strong>Chea Sopheakdey</strong>. I create beautiful,
              functional web applications that solve real-world problems.
            </p>

            {/* Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link to='/contact' className="px-5 py-2 rounded-md bg-blue-600 hover:bg-blue-700 transition">
                Get in touch
              </Link>
              <button className="px-5 py-2 rounded-md border border-slate-300 hover:bg-slate-700 transition">
                Download Resume
              </button>
            </div>

            {/* Socials */}
            <div className="mt-6 flex justify-center md:justify-start gap-4">
              <Link to="/" className="bg-slate-700 p-3 rounded-lg hover:bg-slate-600">
                <Github className="w-5 h-5" />
              </Link>
              <Link to="/" className="bg-slate-700 p-3 rounded-lg hover:bg-slate-600">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link to="/" className="bg-slate-700 p-3 rounded-lg hover:bg-slate-600">
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className=" mb-8 md:mb-0">
            <img
              src="./images/Kdey.jpg"
              alt="MyPhoto"
              className="rounded-full w-30 md:w-60 lg:w-80 shadow-xl border-4 md:border-10 border-indigo-600"
            />
          </div>
        </div>
      </section>

      {/* feature projects */}
      <section className="h-dvh bg-indigo-900">Hi</section>
      <section className="h-dvh bg-indigo-900">Hi</section>
    </main>
  );
};

export default Home;
