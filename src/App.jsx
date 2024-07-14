import React from "react";
import { Box } from "@mui/material";
import Navbar from "./components/navbar/Navbar";
import MainContent from "./pages/MainContent";

const App = () => {
  return (
    <Box fontFamily={"cursive"}>
      <Navbar />
      <MainContent />
    </Box>
  );
};

export default App;
