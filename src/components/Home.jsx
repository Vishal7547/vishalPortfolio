import React, { useRef } from "react";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import me from "../assets/vishal.png";

const Home = () => {
  const clientCount = useRef(null);
  const projectCount = useRef(null);

  const animationClientsCount = () => {
    animate(0, 100, {
      duration: 1,
      onUpdate: (v) => (clientCount.current.textContent = v.toFixed()),
    });
  };
  const animationProjectsCount = () => {
    animate(0, 500, {
      duration: 1,
      onUpdate: (v) => (projectCount.current.textContent = v.toFixed()),
    });
  };

  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };
  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I Am <br /> Vishal Kumar
          </motion.h1>

          <Typewriter
            options={{
              strings: ["A Developer", "A Designer", "A Creator"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />
          <div className="intro">
            <p>
              I am a seasoned Fullstack Developer with robust technical
              proficiency. Currently, I am in the fourth year of my Bachelor of
              Technology program in Electronic and Communication Engineering at
              Purnea College of Engineering, Purnea, affiliated with Bihar
              Engineering University, Patna.
            </p>
          </div>
          <div>
            <a href="mailto:vishalk80260@gmail.com">Hire Me</a>
            <a href="#work">
              Projects <BsArrowUpRight />
            </a>
          </div>

          <aside>
            <div className="countClient">
              <p>
                +
                <motion.span
                  whileInView={animationClientsCount}
                  ref={clientCount}
                ></motion.span>
              </p>
              <span>Project Done</span>
            </div>
            <div style={{ visibility: "hidden" }}>none</div>
            <div className="countClient">
              <p>Contact</p>
              <span>vishalk80260@gmail.com</span>
            </div>
          </aside>
        </div>
      </section>
      <section>
        <img src={me} alt="vishal" />
      </section>
      <BsChevronDown />
    </div>
  );
};

export default Home;
