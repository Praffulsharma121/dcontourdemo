import { Box, Button, Flex, Link, Text, Image } from "@chakra-ui/react";
import { RiMenuUnfold4Line2 } from "react-icons/ri";
import brandIcon from "../assets/Images/brandLogo.png";
import React from "react";
import "./TopHeader.css";
import { FaUser } from "react-icons/fa";

export const TopHeader = () => {
  // return (
  //   <Box bgGradient="linear(to-r, #330066, #6600cc)" p={4}>
  //     <Flex justify="space-between" align="center">
  //       <Text fontSize="xl" color="white" fontWeight="bold">
  //         Brand
  //       </Text>
  //       <Flex>
  //         <Link href="#home" color="white" mx={2}>
  //           Home
  //         </Link>
  //         <Link href="#about" color="white" mx={2}>
  //           About
  //         </Link>
  //         <Link href="#contact" color="white" mx={2}>
  //           Contact
  //         </Link>
  //         <Button
  //           bgGradient="linear(to-r, #ff00ff, #ff66ff)"
  //           color="white"
  //           ml={4}
  //         >
  //           Get Started
  //         </Button>
  //       </Flex>
  //     </Flex>
  //   </Box>

  // );
  return (
    <Box bgGradient="linear(to-r, #1A1A40, #270082)" p={4}>
      <Flex justify="space-between" align="center">
        <Image src={brandIcon} className="headerBrand_Img" />
        <Flex alignItems="center">
          <Link href="#home" color="white" mx={2}>
            Home
          </Link>
          <Link href="#about" color="white" mx={2}>
            About
          </Link>
          <Link href="#contact" color="white" mx={2}>
            Contact
          </Link>
          <Button
            bgGradient="linear(to-r, #7A0BC0, #FA58B6)"
            color="white"
            ml={4}
            _hover={{
              bgGradient: "linear(to-r, #FA58B6, #7A0BC0)", // Optional: reverse the gradient for effect
              boxShadow:
                "0 0 10px rgba(255, 105, 180, 0.7), 0 0 20px rgba(122, 11, 192, 0.7)", // Neon glow effect
              transform: "scale(1.05)", // Optional: slight scale on hover
            }}
            _active={{
              bgGradient: "linear(to-r, #7A0BC0, #FA58B6)", // Maintain original gradient on click
              boxShadow:
                "0 0 5px rgba(255, 105, 180, 0.5), 0 0 10px rgba(122, 11, 192, 0.5)", // Slight glow on click
            }}
            _focus={{
              boxShadow: "0 0 0 3px rgba(255, 105, 180, 0.5)", // Optional: focus state outline
            }}
          >
            Get Started
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};
