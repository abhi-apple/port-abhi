import React, { useEffect, useState } from "react";
//import axios from "axios";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";
import { SocialIcons } from "../Header/HeaderStyles";
import {
  AiFillApple,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillSave,
  AiOutlineDownload,
  AiOutlineSave,
} from "react-icons/ai";

const Hero = (props) => {
  // const [news, setnews] = useState([]);
  // axios
  //   .get(
  //     "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=78b45085752c4e7aaa51f2e603be5b64"
  //   )
  //   .then((res) => {
  //     console.log(res);
  //     setnews(res.data.articles);
  //   });
  // const [data, setdata] = useState([]);
  // useEffect(async() => {
  //   await axios.get("https://jsonplaceholder.typicode.com/todos/1").then(result =>{setdata(result)})
  //   console.log(result)
  // axios.get("https://jsonplaceholder.typicode.com/todos/1", {
  //   method: "Get",
  // },["https://jsonplaceholder.typicode.com/todos/1"])
  //   .then((response) => response.json())
  //   .then((json) => setdata(json));
  // console.log(data);
  // },[]);
  const handleClick = () => {
    window.open(
      "https://drive.google.com/file/d/1pkcoE-ZgV46d-HbJdsm7hvyLm-_EcJkX/view?usp=sharing"
    );
  };

  return (
    <div>
      <Section row nopadding>
        <LeftSection>
          <SectionTitle main center>
            Welcome to <br />
            My World
          </SectionTitle>
          <SectionText>
            Hello Everyone welcome , I am glad to intoduce you to me.
          </SectionText>
          <Button
            onClick={
              handleClick
              // (window.open =
              //   "https://drive.google.com/file/d/1mXJF185ZbGY6XwUQsjxWwrKBazDSCBrR/view?usp=sharing")
            }
          >
            Download Resume
            <SocialIcons
              href="https://drive.google.com/file/d/1pkcoE-ZgV46d-HbJdsm7hvyLm-_EcJkX/view?usp=sharing"
              target="_blank"
            >
              <AiOutlineDownload size="3rem" />
            </SocialIcons>
          </Button>
          {/* {news.map((value) => {
              <SectionText>
                {value.author}
                <br />
                {value.description}
              </SectionText>;
            })} */}
          {/* <Button
              onClick={() =>
                (window.location =
                  "https://drive.google.com/file/d/1mXJF185ZbGY6XwUQsjxWwrKBazDSCBrR/view?usp=sharing")
              }
            >
              Download Resume
            </Button> */}
        </LeftSection>
      </Section>
    </div>
  );
};

export default Hero;
