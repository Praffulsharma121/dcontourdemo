import { Box, Image } from "@chakra-ui/react";
import React from "react";
import { TopHeader } from "../header/TopHeader";
import { ToolList } from "../Tool-list/ToolList";
import { About } from "./About";
import { ContentSection } from "./ContentSection";
import { Footer } from "./Footer";
import "./Home.css"

export const Home = () => {
  return (
    <Box className="Home--Box">
      <TopHeader />
      <About />
      {/* <ContentSection /> */}
      <ToolList />
      <Footer />
    </Box>
  )
};
