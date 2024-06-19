import { Box, Image } from "@chakra-ui/react";
import React from "react";
import { ToolList } from "../Tool-list/ToolList";
import { About } from "./About";
import { Footer } from "./Footer";
import "./Home.css"

export const Home = () => {
  return (
    <Box className="Home--Box">
      <About />
      <ToolList />
      <Footer />
    </Box>
  )
};
