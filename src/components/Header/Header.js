import Link from "next/link";
import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import {
  AiFillApple,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillSave,
  AiOutlineDownload,
  AiOutlineSave,
  AiFillBuild,
  AiFillBulb
} from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => (
  <Navbar fixed={"top"} className={"position-sticky ps-0"}>
    <Container>
      <Div1>
        <Link href="/">
          <a
            style={{
              position: "sticky",
              display: "flex",
              alignItems: "center",
              color: "#00FFFF",
              marginBottom: "20px",
              border: "2px light blue",
            }}
          >
            <AiFillBulb size="3rem" />
            <Span>Portfolio</Span>
          </a>
        </Link>
      </Div1>
      <Div2>
        <li>
          <Link href="#projects">
            <NavLink>Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#tech">
            <NavLink>Tech</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#about">
            <NavLink>About</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#contactme">
            <NavLink>Contact Me </NavLink>
          </Link>
        </li>

      </Div2>
      
      <Div3>
        <SocialIcons href="https://github.com/abhi-apple" target="_blank">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/gujjala-abhinay-prakash-reddy-9375a1203/" target="_blank">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>

        <SocialIcons href="https://drive.google.com/file/d/1pkcoE-ZgV46d-HbJdsm7hvyLm-_EcJkX/view?usp=sharing" target="_blank">
          <AiOutlineDownload size='3rem'/>
        </SocialIcons>
      </Div3>
    </Container>
  </Navbar>
);

export default Header;
