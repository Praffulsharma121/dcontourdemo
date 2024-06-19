import { Box, Text } from "@chakra-ui/react";
import React from "react";
import "./ToolList.css"
import { useNavigate } from 'react-router-dom';

export const ToolList = () => {

    const navigate = useNavigate();

    return (
        <Box className="Tools--Box">
            <Text className="Tool--Heading">Tools</Text>
            <Box className="Tool--Box" onClick={() => navigate('/Tool-Name/FFSTRIP')}>FFSTRIP</Box>
            <Box className="Tool--Box" onClick={() => navigate('/Tool-Name/Light-Guide')}>Light Guide</Box>
        </Box>
    )
}