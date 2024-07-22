import { Box, Button, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import React from "react";

export const Collimator = () => {
  return (
    <Box
      bgGradient="linear(to-r, #1A1A40, #270082)"
      p={8}
      minHeight="100vh"
      color="white"
    >
      <Flex direction="column" align="center" justify="center">
        <Heading as="h1" size="xl" mb={6}>
          Collimator
        </Heading>
        <Stack spacing={4} width="100%" maxW="md">
          <Stack spacing={4}>
            <Box>Source Position:</Box>
            <Flex justify="space-between">
              <Input
                placeholder="X"
                mb={2}
                bg="whiteAlpha.300"
                borderColor="#7A0BC0"
                color="white"
                mr={2}
              />
              <Input
                placeholder="Y"
                mb={2}
                bg="whiteAlpha.300"
                borderColor="#7A0BC0"
                color="white"
                mr={2}
              />
              <Input
                placeholder="Z"
                mb={2}
                bg="whiteAlpha.300"
                borderColor="#7A0BC0"
                color="white"
              />
            </Flex>
          </Stack>
          <Stack spacing={4}>
            <Box>Optical Direction:</Box>
            <Flex justify="space-between">
              <Input
                placeholder="0"
                mb={2}
                bg="whiteAlpha.300"
                borderColor="#7A0BC0"
                color="white"
                mr={2}
              />
              <Input
                placeholder="0"
                mb={2}
                bg="whiteAlpha.300"
                borderColor="#7A0BC0"
                color="white"
                mr={2}
              />
              <Input
                placeholder="0"
                mb={2}
                bg="whiteAlpha.300"
                borderColor="#7A0BC0"
                color="white"
              />
            </Flex>
          </Stack>
          <Stack spacing={4}>
            <Box>Side Direction:</Box>
            <Flex justify="space-between">
              <Input
                placeholder="0"
                mb={2}
                bg="whiteAlpha.300"
                borderColor="#7A0BC0"
                color="white"
                mr={2}
              />
              <Input
                placeholder="0"
                mb={2}
                bg="whiteAlpha.300"
                borderColor="#7A0BC0"
                color="white"
                mr={2}
              />
              <Input
                placeholder="0"
                mb={2}
                bg="whiteAlpha.300"
                borderColor="#7A0BC0"
                color="white"
              />
            </Flex>
          </Stack>
          <Flex justify="space-between">
            <Input
              placeholder="HSize"
              bg="whiteAlpha.300"
              borderColor="#7A0BC0"
              color="white"
              mr={2}
            />
            <Input
              placeholder="Lens Depth"
              bg="whiteAlpha.300"
              borderColor="#7A0BC0"
              color="white"
            />
          </Flex>
          <Flex justify="space-between">
            <Input
              placeholder="Lens inner diameter"
              bg="whiteAlpha.300"
              borderColor="#7A0BC0"
              color="white"
              mr={2}
            />
            <Input
              placeholder="Draft angle"
              bg="whiteAlpha.300"
              borderColor="#7A0BC0"
              color="white"
            />
          </Flex>
          <Flex justify="space-between">
            <Input
              placeholder="Edge thicknees"
              bg="whiteAlpha.300"
              borderColor="#7A0BC0"
              color="white"
              mr={2}
            />
            <Input
              placeholder="Egde distance"
              bg="whiteAlpha.300"
              borderColor="#7A0BC0"
              color="white"
            />
          </Flex>
          <Flex justify="space-between">
            <Input
              placeholder="Refractive Index"
              bg="whiteAlpha.300"
              borderColor="#7A0BC0"
              color="white"
              mr={2}
            />
          </Flex>
          <Flex justify="space-between" mt={4}>
            <Button bgGradient="linear(to-r, #7A0BC0, #FA58B6)" color="white">
              Select File
            </Button>
            <Button bgGradient="linear(to-r, #7A0BC0, #FA58B6)" color="white">
              Upload
            </Button>
            <Button bgGradient="linear(to-r, #7A0BC0, #FA58B6)" color="white">
              Submit
            </Button>
          </Flex>
        </Stack>
      </Flex>
    </Box>
  );
};
