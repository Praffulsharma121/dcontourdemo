import { Box, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import HomeImage from "../assets/Images/homepageImage.png";
import "./Home.css";
import DcontourLogo from "../assets/Images/Group 3.png";

export const About = () => {

  return (
    <Box className="About--Box">
      <Image src={HomeImage} className="background-image" />
      <Box className="About--Details--Box">
        <Image src={DcontourLogo} alt="Logo" className="About--Logo" />
        <Text className="About--Text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel quisquam
          alias doloribus accusantium, minus rem vero aliquid nesciunt! Est
          nobis at magnam laudantium labore soluta recusandae. Beatae facere
          quaerat tempore.
        </Text>
      </Box>
    </Box>
  );
};
