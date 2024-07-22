import { Box, Flex, Link, Text } from "@chakra-ui/react";
import React from "react";

export const Footer = () => {
  return (
    <Box bg="#270082" color="white" p={4}>
      <Flex
        justify="space-between"
        align="center"
        direction={{ base: "column", md: "row" }}
      >
        <Text>&copy; 2024 Brand. All rights reserved.</Text>
        <Flex>
          <Link href="#privacy" mx={2}>
            Privacy Policy
          </Link>
          <Link href="#terms" mx={2}>
            Terms of Service
          </Link>
          <Link href="#contact" mx={2}>
            Contact
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};
