import React, { useRef, useState } from "react";
import { Box, Button, Input, Text, Stack } from "@chakra-ui/react";
import { AiOutlineUpload } from "react-icons/ai";
import "./LightGuide.css";

export const LightGuide = () => {
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

  // const handleUpload = () => {
  //   if (!configFile || !inputFile) return;

  //   const formData = new FormData();
  //   formData.append("config_file", configFile);
  //   formData.append("input_file", inputFile);

  //   return fetch("https://20be-103-179-38-226.ngrok-free.app/lightguide", {
  //     method: "POST",
  //     body: formData,
  //     // mode: "no-cors", // Set the mode to 'no-cors' for testing
  //   })
  //     .then((response) => {
  //       console.log("Response:", response); // Log the response object for debugging

  //       if (response.ok) {
  //         console.log("Files uploaded successfully");
  //       } else {
  //         console.error("File upload failed");
  //         throw new Error("File upload failed");
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error uploading files:", error);
  //       throw error; // Re-throw the error to propagate it further if needed
  //     });
  // };

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
    <Box className="LightGuide--Box">
      {" "}
      <Box p="4" borderWidth="1px" borderRadius="lg" maxW="600px" m="auto" background="#fff">
        <Stack spacing="4">
          <Button
            variant="outline"
            colorScheme={configFile ? "green" : "blue"}
            leftIcon={<AiOutlineUpload />}
            onClick={handleConfigClick}
          >
            {configFile ? "Change Config File" : "Select Config File"}
          </Button>
          <Input
            type="file"
            ref={configFileInputRef}
            display="none"
            onChange={handleConfigFileChange}
          />
          <Button
            variant="outline"
            colorScheme={inputFile ? "green" : "blue"}
            leftIcon={<AiOutlineUpload />}
            onClick={handleInputClick}
          >
            {inputFile ? "Change Input File" : "Select Input File"}
          </Button>
          <Input
            type="file"
            ref={inputFileInputRef}
            display="none"
            onChange={handleInputFileChange}
          />
          <Button
            colorScheme="teal"
            onClick={handleUpload}
            isDisabled={!configFile || !inputFile}
          >
            Upload
          </Button>
          {!configFile || !inputFile ? (
            <Text color="red.500">Please select both files to upload.</Text>
          ) : null}
        </Stack>
      </Box>
    </Box>
  );
};
