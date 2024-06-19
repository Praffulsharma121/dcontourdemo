import { Box, Button, Image, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import LoginCss from "./Login.css";
import "./Login.css";
import DcontourLogo from "../assets/Images/Group 3.png";
import { GoogleLogin } from "../OtherLoginOptions/GoogleLogin";
import { FacebookLogin } from "../OtherLoginOptions/FacebookLogin";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  //   return <Box className={LoginCss["Login--Box"]}></Box>;

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const navigate = useNavigate();

  return (
    <Box className="Login--Box">
      <Box className="Login--Form--Box">
        <Image src={DcontourLogo} />
        <Box className="Login--Options">
          <Box className="Other--Login--Options--Box">
            <Text className="Login--Continue--Text">Continue with</Text>
            <Box className="Login--SSO--Box">
              <GoogleLogin />
              <FacebookLogin />
            </Box>
          </Box>
          <Box className="Form--Login">
            <Text className="Login--Text">Login</Text>
            <Input
              value={userEmail}
              onChange={(e: any) => setUserEmail(e.target.value)}
              className="Login--Input"
              placeholder="Email"
              type="email"
            />
            <Input
              value={userPassword}
              onChange={(e: any) => setUserPassword(e.target.value)}
              className="Login--Input"
              placeholder="Password"
              type="password"
            />

            <Button className="Login--Button" onClick={() => navigate("/")}>Login</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
