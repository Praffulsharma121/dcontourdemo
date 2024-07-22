import { Box, Button, Checkbox, Image, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import LoginCss from "./Login.css";
import "./Login.css";
import LoginSideImage from "../assets/Images/login-image.png";
import LoginTopImg from "../assets/Icons/login-top-background.svg";
import { GoogleLogin } from "../OtherLoginOptions/GoogleLogin";
import { FacebookLogin } from "../OtherLoginOptions/FacebookLogin";
import { useNavigate } from "react-router-dom";
import LoginBackGround from "../assets/Images/loginbackground.png";

export const Login = () => {
  //   return <Box className={LoginCss["Login--Box"]}></Box>;

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const navigate = useNavigate();

  return (
    <Box className="Login--Box">
      {/* <Box className="Login--Side--Image">
        <Image src={LoginSideImage} className="loginImage" />
      </Box>
      <Box className="Login--Side--Box">
        <Image src={LoginTopImg} className="Login--Top__Image"/>
      </Box> */}
      <Image src={LoginBackGround} className="loginImg" />
      <Text className="Login--Heading">Login</Text>
      <Box className="Login--Form">
        <Box className="Login--Inputs--Box">
          <Box className="Login--Form--Email__Box">
            <Text className="Email--Text">Email</Text>
            <Input className="Email--Input" placeholder="User Email" color="white"/>
          </Box>
          <Box className="Login--Form--Password__Box">
            <Text className="Password--Text">Password</Text>
            <Input className="Password--Input" placeholder="*************" color="white"/>
          </Box>
          <Box className="Login--Credentials--Password">
            <Checkbox className="Login--Remember--CheckBox">
              Remember Credentials
            </Checkbox>
            <Text className="Login--ForgotPassword--Text">
              Forgot Password?
            </Text>
          </Box>
          <Box className="Login--Button--Box">
            <Button className="Login--Button">Login</Button>
          </Box>
          <Box className="Login--SignIn--Methods">
            <Text className="Login--OR--Text">--OR--</Text>
            <Text className="Login--SignIn--Text">Sign in with</Text>
            <Box className="Login--Methods">
              <GoogleLogin />
              <FacebookLogin />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
