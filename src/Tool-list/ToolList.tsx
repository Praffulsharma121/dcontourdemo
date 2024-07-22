import { Box, Text, Heading, Flex } from "@chakra-ui/react";
import React from "react";
import "./ToolList.css";
import { useNavigate } from "react-router-dom";

export const ToolList = () => {
  // const navigate = useNavigate();
  // const toolList = ["FFSTRIP", "Light Guide", "Pillow Optics", "Collimator"];

  // return (
  //   <Box className="Tools--Box">
  //     <Text className="Tool--Heading">Tools</Text>
  //     {/* <Box className="Tool--Box" onClick={() => navigate('/Tool-Name/FFSTRIP')}></Box> */}
  //     <Box className="ToolList">
  //       {toolList.map((toolName: any) => {
  //         return (
  //           <Box
  //             className="ToolCard"
  //             onClick={() => navigate(`/Tool-Name/${toolName}`)}
  //           >
  //             <Text className="ToolCard-heading">{toolName}</Text>
  //           </Box>
  //         );
  //       })}
  //     </Box>
  //   </Box>
  // );

  const navigate = useNavigate();
  const toolList = ["FFSTRIP", "Light Guide", "Pillow Optics", "Collimator"];

  return (
    <Box p={8} bg="#1A1A40" color="white">
      <Heading as="h2" size="xl" mb={4} textAlign="center">
        Tools
      </Heading>
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="center"
        align="center"
      >
        <Box className="ToolList">
          {toolList.map((toolName: any) => {
            return (
              <Box
                className="ToolCard"
                onClick={() => navigate(`/Tool-Name/${toolName}`)}
              >
                <Text className="ToolCard-heading">{toolName}</Text>
              </Box>
            );
          })}
        </Box>
      </Flex>
    </Box>
  );

  //   return (
  //     <Box p={8} bg="#330066" color="white">
  //       <Heading as="h2" size="xl" mb={4} textAlign="center">
  //         Our Features
  //       </Heading>
  //       <Flex
  //         direction={{ base: "column", md: "row" }}
  //         justify="center"
  //         align="center"
  //       >
  //         <Stack spacing={4} flex="1" p={4}>
  //           <Image src="path/to/feature1.jpg" alt="Feature 1" borderRadius="md" />
  //           <Text>Feature 1 Description</Text>
  //         </Stack>
  //         <Stack spacing={4} flex="1" p={4}>
  //           <Image src="path/to/feature2.jpg" alt="Feature 2" borderRadius="md" />
  //           <Text>Feature 2 Description</Text>
  //         </Stack>
  //         <Stack spacing={4} flex="1" p={4}>
  //           <Image src="path/to/feature3.jpg" alt="Feature 3" borderRadius="md" />
  //           <Text>Feature 3 Description</Text>
  //         </Stack>
  //       </Flex>
  //     </Box>
  //   );
};
