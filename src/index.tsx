import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import AppRouter from "./Router";
import reportWebVitals from "./reportWebVitals";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container!);

root.render(
  <React.StrictMode>
    <ChakraProvider>
      <AppRouter />
    </ChakraProvider>
  </React.StrictMode>
);

reportWebVitals();
