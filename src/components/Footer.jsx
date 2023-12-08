import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineArrowUp,
} from "react-icons/ai";
import footerLogo from "../assets/footerLogo.png";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      <div>
        <img src={footerLogo} alt="Founder" />

        <h2>Vishal Kumar</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a
            href="https://www.linkedin.com/in/vishal-kumar-8b4618211/"
            target={"blank"}
          >
            <FaLinkedin />
          </a>

          <a href="https://github.com/Vishal7547" target={"blank"}>
            <AiFillGithub />
          </a>
          <a
            href="https://instagram.com/vishalroy247?igshid=NzZlODBkYWE4Ng=="
            target={"blank"}
          >
            <AiFillInstagram />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
