import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import colorGif from "../assets/Images/gif1.gif";
import "./Home.css";

export const About = () => {
  // useEffect(() => {
  //   setTimeout(() => {
  //     // script.js
  //     const canvas: any = document.getElementById("canvas");
  //     const ctx = canvas.getContext("2d");

  //     canvas.width = window.innerWidth;
  //     canvas.height = window.innerHeight;

  //     const points: any = [];
  //     const numPoints = 100;
  //     const maxDistance = 100;

  //     for (let i = 0; i < numPoints; i++) {
  //       points.push({
  //         x: Math.random() * canvas.width,
  //         y: Math.random() * canvas.height,
  //         vx: (Math.random() - 0.5) * 2,
  //         vy: (Math.random() - 0.5) * 2,
  //       });
  //     }

  //     function draw() {
  //       ctx.clearRect(0, 0, canvas.width, canvas.height);

  //       for (let i = 0; i < numPoints; i++) {
  //         const p1 = points[i];

  //         ctx.beginPath();
  //         ctx.arc(p1.x, p1.y, 2, 0, Math.PI * 2);
  //         ctx.fillStyle = "#00ccff";
  //         ctx.fill();

  //         for (let j = i + 1; j < numPoints; j++) {
  //           const p2 = points[j];
  //           const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);

  //           if (dist < maxDistance) {
  //             ctx.beginPath();
  //             ctx.moveTo(p1.x, p1.y);
  //             ctx.lineTo(p2.x, p2.y);
  //             ctx.strokeStyle = `rgba(0, 204, 255, ${1 - dist / maxDistance})`;
  //             ctx.stroke();
  //           }
  //         }

  //         p1.x += p1.vx;
  //         p1.y += p1.vy;

  //         if (p1.x < 0 || p1.x > canvas.width) p1.vx *= -1;
  //         if (p1.y < 0 || p1.y > canvas.height) p1.vy *= -1;
  //       }

  //       requestAnimationFrame(draw);
  //     }

  //     draw();
  //   }, 300);
  // }, []);

  // return (
  //   <div id="background">
  //     <canvas id="canvas"></canvas>
  //     <div className="center-text">
  //       <h1>OPTONIT</h1>
  //       <p>We are the future of advance lighting!</p>
  //     </div>
  //   </div>
  // );

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      bgGradient="linear(to-r, #1A1A40, #270082)"
      p={8}
      align="center"
      justify="center"
      minHeight="80vh"
    >
      <Box flex="1" color="white" textAlign={{ base: "center", md: "left" }}>
        <Heading as="h1" size="2xl" mb={4}>
          We are the future of advance lighting!
        </Heading>
        <Text fontSize="lg" mb={6}>
          Because you deserve all the light in the world!
        </Text>
        <Button
          size="lg"
          bgGradient="linear(to-r, #7A0BC0, #FA58B6)"
          color="white"
          _hover={{
            bgGradient: "linear(to-r, #FA58B6, #7A0BC0)", // Optional: reverse the gradient for effect
            boxShadow:
              "0 0 10px rgba(255, 105, 180, 0.7), 0 0 20px rgba(122, 11, 192, 0.7)", // Neon glow effect
            transform: "scale(1.05)", // Optional: slight scale on hover
          }}
          _active={{
            bgGradient: "linear(to-r, #7A0BC0, #FA58B6)", // Maintain original gradient on click
            boxShadow:
              "0 0 5px rgba(255, 105, 180, 0.5), 0 0 10px rgba(122, 11, 192, 0.5)", // Slight glow on click
          }}
          _focus={{
            boxShadow: "0 0 0 3px rgba(255, 105, 180, 0.5)", // Optional: focus state outline
          }}
        >
          Learn More
        </Button>
      </Box>
      <Box flex="1" mt={{ base: 6, md: 0 }}>
        <Image src={colorGif} alt="Hero Image" borderRadius="lg" className="AboutUsImg"/>
      </Box>
    </Flex>
  );

  // return (
  //   <Flex
  //     direction={{ base: "column", md: "row" }}
  //     bgGradient="linear(to-r, #330066, #6600cc)"
  //     p={8}
  //     align="center"
  //     justify="center"
  //     minHeight="80vh"
  //   >
  //     <Box flex="1" color="white" textAlign={{ base: "center", md: "left" }}>
  //       <Heading as="h1" size="2xl" mb={4}>
  //         Welcome to Our Website
  //       </Heading>
  //       <Text fontSize="lg" mb={6}>
  //         Explore our services and offerings. Let's make something amazing together.
  //       </Text>
  //       <Button size="lg" bgGradient="linear(to-r, #ff00ff, #ff66ff)" color="white">
  //         Learn More
  //       </Button>
  //     </Box>
  //     <Box flex="1" mt={{ base: 6, md: 0 }}>
  //       <Image src="path/to/your/image.jpg" alt="Hero Image" borderRadius="lg" />
  //     </Box>
  //   </Flex>
  // )
};
