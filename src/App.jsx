import "./App.css";
import Porfile from "./assets/Photo.png";
import Project1 from "./assets/Project1.png";
import Project2 from "./assets/Project2.png";
import Facebook from "./assets/facebook.svg";
import LinkedIn from "./assets/linkedin.svg";
import Instagram from "./assets/instagram.svg";
import ArrowDown from "./assets/arrow-down.svg";
import { useEffect, useState } from "react";

function App() {
  const [scrolling, setScrolling] = useState(false);

  const onPageScroll = () => {
    if (window.pageYOffset > 200) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onPageScroll);
    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="max-w-4xl m-auto relative">
      <header
        className={`${
          scrolling ? "border-b border-gray-900" : ""
        }  fixed left-0 right-0 top-0 z-20`}
        id="home"
      >
        <div className="container m-auto px-4 py-6 max-w-4xl bg-black">
          <div className="flex flex-col gap-4 sm:flex-row justify-between items-center">
            <div>
              <h1 className="font-bold text-2xl">Eko Portfolio</h1>
            </div>
            <div>
              <ul className="flex gap-4">
                <li>
                  <a
                    href="#projects"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#technologies"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Technologies
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <main className="relative mt-28">
        {/* Intro/Banner section */}
        <section>
          <div className="container m-auto px-4 pt-12 pb-12 sm:pt-20 flex flex-col sm:flex-row gap-6 text-center sm:text-left">
            <div>
              <h2 className="font-bold text-4xl">Hello, I'm Eko Firlianto,</h2>
              <div>
                <h2 className="font-bold text-4xl mt-1 gradiant-text">
                  frontend developer
                </h2>
              </div>
              <div>
                <p className="mt-4 text-gray-400">
                  Every line of code you write is a step towards achieving a
                  greater goal in creating amazing digital experiences for users
                </p>
                <button className="px-8 shadow-gray-500 shadow-md py-5 mt-5 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                  <a href="https://drive.google.com/file/d/1xvJqdo1gH1qUY2i5Bx8MlDRu55ccYkr3/view?usp=sharing">
                    Download resume
                  </a>
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="after:bg-[url('./large-long.png')] after:bg-contain after:block after:bg-no-repeat after:w-[420px] after:h-[320px] after:absolute after:top-0 after:-left-20 sm:after:-left-40 before:bg-[url('./small.png')] before:bg-contain before:block before:bg-no-repeat before:w-[220px] before:h-[220px] before:absolute before:bottom-0 before:-right-10">
                <img
                  src={Porfile}
                  className="relative z-10 w-[280px] m-auto sm:w-[600px]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Projects section */}
        <section id="projects">
          <div className="container m-auto px-4 sm:py-12">
            <h2 className="text-2xl font-semibold">Projects</h2>
            <div className="flex flex-col sm:flex-row gap-10 mt-11">
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Project1} className=" w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                  ACADEMIA ONLINE EDUCATION & LEARNING
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  React and Tailwind CSS
                </p>
                <div className="flex mt-12 gap-2">
                  <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    <a href="https://education-eko-deploy.vercel.app/">
                      Live preview
                    </a>
                  </button>
                  <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                    <a href="https://github.com/ekofirlianto/education-eko">
                      github
                    </a>
                  </button>
                </div>
              </div>

              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Project2} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                  MERN FULL STACK ECOMMERCE SITE
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  React, Redux, and Node.js
                  <br />
                  Admin email : admin1@gmail.com Password : 1234567
                </p>
                <div className="flex mt-12 gap-2">
                  <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    <a href="http://eduwork.satria.win/">Live preview</a>
                  </button>
                  <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                    <a href="https://github.com/ekofirlianto/ShopIT-V2-Eko">
                      github
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technoglies section */}
        <section className="py-10" id="technologies">
          <div className="container m-auto px-4">
            <h2 className="text-2xl font-semibold">Technologies</h2>
            <div className="mt-14">
              <div>
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">HTML</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">
                    CSS, Tailwind CSS, Sass & Bootstrap
                  </h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">JavaScript</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">ReactJS</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">Redux Saga</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">GIT</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="container m-auto flex justify-between px-4 py-6">
          <div>
            <p className="text-gray-300 text-sm">Copyright @ 2024</p>
          </div>
          <div>
            <ul className="flex gap-4">
              <li>
                <a href="https://www.facebook.com/share/1FghSGERNvnQFPUk/?mibextid=qi2Omg">
                  <img src={Facebook} className="w-5" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/eko-firlianto">
                  <img src={LinkedIn} className="w-5" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/fiirlian_/">
                  <img src={Instagram} className="w-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      {scrolling && (
        <button
          className="fixed block right-8 bottom-0 w-24"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <img src={ArrowDown} />
        </button>
      )}
    </div>
  );
}

export default App;
