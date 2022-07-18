import { ListItem } from "@material-ui/core";
import React from "react";
import {
  Section,
  SectionDivider,
  SectionTitle,
  SectionText,
} from "../../styles/GlobalComponents";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillProfile,
  AiFillMessage,
  AiFillMail,
  AiOutlineDownload
} from "react-icons/ai";
import Button from "../../styles/GlobalComponents/Button";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";
// import emailjs from 'emailj'

const Footer = () => {
  const handleClick = () => {
    window.open(
      "https://drive.google.com/file/d/1pkcoE-ZgV46d-HbJdsm7hvyLm-_EcJkX/view?usp=sharing"
    );
  };
  return (
    <Section id="contactme">
      <FooterWrapper>
        <LinkList>
          <LinkColumn>
            <SocialIcons>
              <LinkTitle>Feel free to call </LinkTitle>{" "}
              <AiFillMessage size="3rem" />
              <ListItem href="tel:+91 6304387583">6304387583</ListItem>
            </SocialIcons>
          </LinkColumn>
          <LinkColumn>
            <SocialIcons href="https://mail.google.com/mail/u/1/#inbox">
              <LinkTitle>Feel free to Mail </LinkTitle>{" "}
              <AiFillMail size="3rem" />
              <ListItem>abhinayreddy0112@gmail.com</ListItem>
            </SocialIcons>
          </LinkColumn>
          {/* 
          <LinkColumn>
            <LinkTitle>Contact me </LinkTitle>
            <ListItem href=" ">111-111-1111</ListItem>
          </LinkColumn> */}
          <Button
            onClick={
              handleClick
              // (window.open =
              //   "https://drive.google.com/file/d/1mXJF185ZbGY6XwUQsjxWwrKBazDSCBrR/view?usp=sharing")
            }
          >
            Contact Me
            <SocialIcons
              href="https://drive.google.com/file/d/1pkcoE-ZgV46d-HbJdsm7hvyLm-_EcJkX/view?usp=sharing"
              target="_blank"
            >
            </SocialIcons>
          </Button>
        </LinkList>
        <SocialIconsContainer>
          <CompanyContainer>
            
          </CompanyContainer>
          <SocialContainer>
            <SocialIcons href="https://github.com">
              <AiFillGithub size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://linkedin.com">
              <AiFillLinkedin size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://instagram.com">
              <AiFillInstagram size="3rem" />
            </SocialIcons>

          </SocialContainer>
        </SocialIconsContainer>
      </FooterWrapper>
    </Section>
  );
};

export default Footer;
