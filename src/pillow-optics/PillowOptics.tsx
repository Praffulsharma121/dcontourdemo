import React, { useRef, useState } from "react";
import {
  Box,
  Button,
  Input,
  Text,
  Stack,
  Flex,
  useRadio,
  useRadioGroup,
  HStack,
} from "@chakra-ui/react";
import { AiOutlineUpload } from "react-icons/ai";
// import "./LightGuide.css";

function RadioCard(props: any) {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderRadius="full"
        bg={
          !props.isChecked
            ? "linear-gradient(to-r, #7A0BC0, #FA58B6)"
            : "whiteAlpha.300"
        }
        color={!props.isChecked ? "white" : "gray.200"}
        px={5}
        py={3}
        m={2}
        textAlign="center"
        fontWeight="bold"
        _hover={{
          bg: "linear-gradient(to-r, #FA58B6, #7A0BC0)",
          color: "white",
        }}
        _checked={{
          bg: "linear-gradient(to-r, #7A0BC0, #FA58B6)",
          color: "white",
        }}
      >
        {props.children}
      </Box>
    </Box>
  );
}

export const PillowOptics = () => {
  const configFileInputRef = useRef<HTMLInputElement | null>(null);
  const inputFileInputRef = useRef<HTMLInputElement | null>(null);

  const [configFile, setConfigFile] = useState<File | null>(null);
  const [inputFile, setInputFile] = useState<File | null>(null);

  const handleConfigFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files && event.target.files[0]) {
      setConfigFile(event.target.files[0]);
    }
  };

  const handleInputFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files && event.target.files[0]) {
      setInputFile(event.target.files[0]);
    }
  };

  const options = ["Radius", "Spread"];
  const [selectedCapsule, setSelectedCapsule] = useState("Radius");

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "capsule",
    defaultValue: "Radius",
    onChange: setSelectedCapsule,
  });

  const group = getRootProps();

  const handleUpload = () => {
    if (!configFile || !inputFile) return;

    const formData = new FormData();
    formData.append("config_file", configFile);
    formData.append("input_file", inputFile);

    fetch("https://20be-103-179-38-226.ngrok-free.app/lightguide", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          console.error("File upload failed");
          throw new Error("File upload failed");
        }

        // Assume a generic filename or specify one
        const filename = "downloaded-file";

        // Trigger download
        response.blob().then((blob) => {
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.style.display = "none";
          a.href = url;
          a.download = filename + ".igs"; // Set a generic or specific filename here
          console.log(filename);
          document.body.appendChild(a);
          a.click();
          window.URL.revokeObjectURL(url);
        });

        console.log("Files uploaded successfully");
      })
      .catch((error) => {
        console.error("Error uploading files:", error);
        // Handle errors as needed
      });
  };

  const handleConfigClick = () => {
    configFileInputRef.current?.click();
  };

  const handleInputClick = () => {
    inputFileInputRef.current?.click();
  };

  return (
    <Box
      bgGradient="linear(to-r, #1A1A40, #270082)"
      p={8}
      minHeight="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      gap="16px"
    >
      <HStack {...group} mb={6}>
        {options.map((value) => {
          const radio = getRadioProps({ value });
          return (
            <RadioCard
              key={value}
              {...radio}
              isChecked={selectedCapsule === value}
            >
              {value}
            </RadioCard>
          );
        })}
      </HStack>
      <Flex
        direction="column"
        align="center"
        justify="center"
        bg="whiteAlpha.300"
        p={12}
        borderRadius="lg"
        boxShadow="lg"
        width={["90%", "80%", "60%", "40%"]}
      >
        <Button
          mb={6}
          size="lg"
          bgGradient="linear(to-r, #7A0BC0, #FA58B6)"
          color="white"
          _hover={{ bgGradient: "linear(to-r, #FA58B6, #7A0BC0)" }}
        >
          Select Input Config File (.ini)
        </Button>
        <input type="file" id="configFileInput" style={{ display: "none" }} />
        <Button
          mb={6}
          size="lg"
          bgGradient="linear(to-r, #7A0BC0, #FA58B6)"
          color="white"
          _hover={{ bgGradient: "linear(to-r, #FA58B6, #7A0BC0)" }}
        >
          Select Parameters file (excel)
        </Button>
        <input type="file" id="inputFileInput" style={{ display: "none" }} />
        <Button
          onClick={handleUpload}
          size="lg"
          bgGradient="linear(to-r, #7A0BC0, #FA58B6)"
          color="white"
          _hover={{ bgGradient: "linear(to-r, #FA58B6, #7A0BC0)" }}
        >
          Upload
        </Button>
        <Text color="red.400" mt={4}>
          Please select both files to upload.
        </Text>
      </Flex>
    </Box>
  );
};
