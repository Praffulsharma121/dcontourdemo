import {
  Box,
  Input,
  Text,
  Button,
  Flex,
  Heading,
  Stack,
} from "@chakra-ui/react";
import React, { useState, useRef } from "react";
import "./Styles.css";

interface ffStripFormState {
  sourceCoord: string[];
  focalLengthX: number;
  focalLengthY: number;
  focalLengthZ: number;
  HSize: string[];
  VSize: string[];
  HSpread: string[];
  HS_ControlPoints: string[];
  VAiming: string[];
  VA_ControlPanel: string[];
  HSpreadReduction: string[];
  HSR_control_Points: string[];
  Delta_HSize: number;
  Delta_VSize: number;
  X_Rotation_Angle: number;
  V_Translate_Angle: number;
  H_Translate_Angle: number;
  Chip_Size_X: number;
  Chip_Size_Y: number;
  Cylinder_Diameter: number;
  Cylinder_Length: number;
}

const initialFormState: ffStripFormState = {
  sourceCoord: [],
  focalLengthX: 0,
  focalLengthY: 0,
  focalLengthZ: 0,
  HSize: [],
  VSize: [],
  HSpread: [],
  HS_ControlPoints: [],
  VAiming: [],
  VA_ControlPanel: [],
  HSpreadReduction: [],
  HSR_control_Points: [],
  Delta_HSize: 0,
  Delta_VSize: 0,
  X_Rotation_Angle: 0,
  V_Translate_Angle: 0,
  H_Translate_Angle: 0,
  Chip_Size_X: 0,
  Chip_Size_Y: 0,
  Cylinder_Diameter: 0,
  Cylinder_Length: 0,
};

const ArrayValues = [
  "sourceCoord",
  "HSize",
  "VSize",
  "HS_ControlPoints",
  "VAiming",
  "VA_ControlPanel",
  "HSpread",
  "HSpreadReduction",
  "HSR_control_Points",
];

export const Ffstrip = () => {
  const [ffstripForm, setFfstripForm] =
    useState<ffStripFormState>(initialFormState);

  const onEnteringValue = (value: any, inputName: string) => {
    if (ArrayValues.some((substring) => inputName.includes(substring))) {
      const arrayValue = value.split(" ").map(String);
      setFfstripForm({
        ...ffstripForm,
        [inputName]: arrayValue,
      });
    } else {
      setFfstripForm({
        ...ffstripForm,
        [inputName]: parseInt(value),
      });
    }
  };

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    console.log("FormData:", formData);
    try {
      const response = await fetch("https://eoy96e0b3pcnbe8.m.pipedream.net/", {
        method: "POST",
        body: formData,
        mode: "no-cors", // Set the mode to 'no-cors' for testing
      });

      console.log("Response:", response); // Log the response object for debugging

      if (response.ok) {
        console.log("File uploaded successfully");
      } else {
        console.error("File upload failed");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const onClickingSumit = () => {
    console.log(ffstripForm);
  };

  // return (
  //   <Box className="ToolMain--Box">
  //     <Box className="ToolHead--Box">
  //       <Text className="ToolMain--Heading">FFSTRIP</Text>
  //     </Box>
  //     <Box className="Tools-Inputs">
  //       <Box className="SourceCoord">
  //         <Text>Source Co ordinates :</Text>
  //         <Input
  //           placeholder="X Y Z"
  //           onChange={(e: any) =>
  //             onEnteringValue(e.target.value, "sourceCoord")
  //           }
  //           value={ffstripForm?.sourceCoord?.join(" ")}
  //         />
  //       </Box>
  //       <Box className="SourceCoord">
  //         <Text className="SourceCoord">Focal length :</Text>
  //         <Input
  //           placeholder="X"
  //           onChange={(e: any) =>
  //             onEnteringValue(e.target.value, "focalLengthX")
  //           }
  //           value={ffstripForm?.focalLengthX}
  //         />
  //         <Input
  //           placeholder="Y"
  //           onChange={(e: any) =>
  //             onEnteringValue(e.target.value, "focalLengthY")
  //           }
  //           value={ffstripForm?.focalLengthY}
  //         />
  //         <Input
  //           placeholder="Z"
  //           onChange={(e: any) =>
  //             onEnteringValue(e.target.value, "focalLengthZ")
  //           }
  //           value={ffstripForm?.focalLengthZ}
  //         />
  //       </Box>
  //       <Box className="HVSize">
  //         <Text>HSize</Text>{" "}
  //         <Input
  //           placeholder="HVSize"
  //           onChange={(e: any) => onEnteringValue(e.target.value, "HSize")}
  //           value={ffstripForm?.HSize?.join(" ")}
  //         />{" "}
  //         <Text>VSize</Text>{" "}
  //         <Input
  //           placeholder="VSize"
  //           onChange={(e: any) => onEnteringValue(e.target.value, "VSize")}
  //           value={ffstripForm?.VSize?.join(" ")}
  //         />
  //       </Box>
  //       <Box className="HVSize">
  //         <Text>HSpread</Text>{" "}
  //         <Input
  //           placeholder=""
  //           onChange={(e: any) => onEnteringValue(e.target.value, "HSpread")}
  //           value={ffstripForm?.HSpread?.join(" ")}
  //         />{" "}
  //         <Text>HS ControlPoints</Text>{" "}
  //         <Input
  //           placeholder=""
  //           onChange={(e: any) =>
  //             onEnteringValue(e.target.value, "HS_ControlPoints")
  //           }
  //           value={ffstripForm?.HS_ControlPoints?.join(" ")}
  //         />
  //       </Box>
  //       <Box className="HVSize">
  //         <Text>VAiming</Text>{" "}
  //         <Input
  //           placeholder=""
  //           onChange={(e: any) => onEnteringValue(e.target.value, "VAiming")}
  //           value={ffstripForm?.VAiming?.join(" ")}
  //         />{" "}
  //         <Text>VA ControlPanel</Text>{" "}
  //         <Input
  //           placeholder=""
  //           onChange={(e: any) =>
  //             onEnteringValue(e.target.value, "VA_ControlPanel")
  //           }
  //           value={ffstripForm?.VA_ControlPanel?.join(" ")}
  //         />
  //       </Box>
  //       <Box className="HVSize">
  //         <Text>HSpreadReduction</Text>{" "}
  //         <Input
  //           placeholder=""
  //           onChange={(e: any) =>
  //             onEnteringValue(e.target.value, "HSpreadReduction")
  //           }
  //           value={ffstripForm?.HSpreadReduction?.join(" ")}
  //         />
  //         <Text>HSR control Points</Text>{" "}
  //         <Input
  //           placeholder=""
  //           onChange={(e: any) =>
  //             onEnteringValue(e.target.value, "HSR_control_Points")
  //           }
  //           value={ffstripForm?.HSR_control_Points?.join(" ")}
  //         />
  //       </Box>
  //       <Box className="HVSize">
  //         <Text>Delta HSize:</Text>{" "}
  //         <Input
  //           placeholder=""
  //           onChange={(e: any) =>
  //             onEnteringValue(e.target.value, "Delta_HSize")
  //           }
  //           value={ffstripForm?.Delta_HSize}
  //         />
  //         <Text>Delta VSize:</Text>{" "}
  //         <Input
  //           placeholder=""
  //           onChange={(e: any) =>
  //             onEnteringValue(e.target.value, "Delta_VSize")
  //           }
  //           value={ffstripForm?.Delta_VSize}
  //         />
  //       </Box>
  //       <Box className="HVSize">
  //         <Text>X_Rotation Angle:</Text>{" "}
  //         <Input
  //           placeholder=""
  //           onChange={(e: any) =>
  //             onEnteringValue(e.target.value, "X_Rotation_Angle")
  //           }
  //           value={ffstripForm?.X_Rotation_Angle}
  //         />
  //         <Text>V_Translate Angle</Text>{" "}
  //         <Input
  //           placeholder=""
  //           onChange={(e: any) =>
  //             onEnteringValue(e.target.value, "V_Translate_Angle")
  //           }
  //           value={ffstripForm?.V_Translate_Angle}
  //         />
  //         <Text>H_Translate Angle</Text>{" "}
  //         <Input
  //           placeholder=""
  //           onChange={(e: any) =>
  //             onEnteringValue(e.target.value, "H_Translate_Angle")
  //           }
  //           value={ffstripForm?.H_Translate_Angle}
  //         />
  //       </Box>
  //       <Box className="HVSize">
  //         <Text>Chip Size X </Text>
  //         <Input
  //           placeholder=""
  //           onChange={(e: any) =>
  //             onEnteringValue(e.target.value, "Chip_Size_X")
  //           }
  //           value={ffstripForm?.Chip_Size_X}
  //         />{" "}
  //         <Text>Chip Size Y</Text>{" "}
  //         <Input
  //           placeholder=""
  //           onChange={(e: any) =>
  //             onEnteringValue(e.target.value, "Chip_Size_Y")
  //           }
  //           value={ffstripForm?.Chip_Size_Y}
  //         />
  //       </Box>
  //       <Box className="HVSize">
  //         <Text>Cylinder Diameter</Text>{" "}
  //         <Input
  //           placeholder=""
  //           onChange={(e: any) =>
  //             onEnteringValue(e.target.value, "Cylinder_Diameter")
  //           }
  //           value={ffstripForm?.Cylinder_Diameter}
  //         />{" "}
  //         <Text>Cylinder length</Text>{" "}
  //         <Input
  //           placeholder=""
  //           onChange={(e: any) =>
  //             onEnteringValue(e.target.value, "Cylinder_Length")
  //           }
  //           value={ffstripForm?.Cylinder_Length}
  //         />
  //       </Box>
  //     </Box>
  //     <Box className="ButtonGroup">
  //       <Box className="UploadButtonGroup">
  //         <Input
  //           type="file"
  //           className="UploadFile"
  //           ref={fileInputRef}
  //           display="none"
  //           onChange={handleFileChange}
  //         />
  //         <Button className="UploadButton" onClick={handleClick}>
  //           {file ? "File Selected" : "Select File"}
  //         </Button>
  //         <Button
  //           className="UploadButton"
  //           onClick={handleUpload}
  //           disabled={!file}
  //         >
  //           Upload
  //         </Button>
  //       </Box>
  //       <Button onClick={onClickingSumit} className="SubmitButton">Submit</Button>
  //     </Box>
  //   </Box>
  // );
  return (
    <Box
      bgGradient="linear(to-r, #1A1A40, #270082)"
      p={8}
      minHeight="100vh"
      color="white"
    >
      <Flex direction="column" align="center" justify="center">
        <Heading as="h1" size="xl" mb={6}>
          FFSTRIP
        </Heading>
        <Stack spacing={4} width="100%" maxW="md">
          <Stack spacing={4}>
            <Box>Source Coordinates:</Box>
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
            <Box>Focal Length:</Box>
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
              placeholder="VSize"
              bg="whiteAlpha.300"
              borderColor="#7A0BC0"
              color="white"
            />
          </Flex>
          <Flex justify="space-between">
            <Input
              placeholder="HSpread"
              bg="whiteAlpha.300"
              borderColor="#7A0BC0"
              color="white"
              mr={2}
            />
            <Input
              placeholder="HS ControlPoints"
              bg="whiteAlpha.300"
              borderColor="#7A0BC0"
              color="white"
            />
          </Flex>
          <Flex justify="space-between">
            <Input
              placeholder="VAiming"
              bg="whiteAlpha.300"
              borderColor="#7A0BC0"
              color="white"
              mr={2}
            />
            <Input
              placeholder="VA ControlPanel"
              bg="whiteAlpha.300"
              borderColor="#7A0BC0"
              color="white"
            />
          </Flex>
          <Flex justify="space-between">
            <Input
              placeholder="HSpreadReduction"
              bg="whiteAlpha.300"
              borderColor="#7A0BC0"
              color="white"
              mr={2}
            />
            <Input
              placeholder="HSR control Points"
              bg="whiteAlpha.300"
              borderColor="#7A0BC0"
              color="white"
            />
          </Flex>
          <Flex justify="space-between">
            <Input
              placeholder="Delta HSize"
              bg="whiteAlpha.300"
              borderColor="#7A0BC0"
              color="white"
              mr={2}
            />
            <Input
              placeholder="Delta VSize"
              bg="whiteAlpha.300"
              borderColor="#7A0BC0"
              color="white"
            />
          </Flex>
          <Flex justify="space-between">
            <Input
              placeholder="X_Rotation Angle"
              bg="whiteAlpha.300"
              borderColor="#7A0BC0"
              color="white"
              mr={2}
            />
            <Input
              placeholder="V_Translate Angle"
              bg="whiteAlpha.300"
              borderColor="#7A0BC0"
              color="white"
              mr={2}
            />
            <Input
              placeholder="H_Translate Angle"
              bg="whiteAlpha.300"
              borderColor="#7A0BC0"
              color="white"
            />
          </Flex>
          <Flex justify="space-between">
            <Input
              placeholder="Chip Size X"
              bg="whiteAlpha.300"
              borderColor="#7A0BC0"
              color="white"
              mr={2}
            />
            <Input
              placeholder="Chip Size Y"
              bg="whiteAlpha.300"
              borderColor="#7A0BC0"
              color="white"
            />
          </Flex>
          <Flex justify="space-between">
            <Input
              placeholder="Cylinder Diameter"
              bg="whiteAlpha.300"
              borderColor="#7A0BC0"
              color="white"
              mr={2}
            />
            <Input
              placeholder="Cylinder Length"
              bg="whiteAlpha.300"
              borderColor="#7A0BC0"
              color="white"
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
