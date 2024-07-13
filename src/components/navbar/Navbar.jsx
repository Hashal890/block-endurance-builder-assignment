import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { GoArrowLeft } from "react-icons/go";
import EditableInputWithIcon from "./EditableInputWithIcon";

const Navbar = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#FFFFFF",
        boxShadow: "0px 4px 4px 0px #00000008",
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
      }}
    >
      <AppBar
        position={"fixed"}
        sx={{
          color: "black",
          backgroundColor: "#FFFFFF",
          boxShadow: "0px 4px 4px 0px #00000008",
        }}
      >
        <Toolbar>
          <IconButton
            size={"large"}
            edge={"start"}
            color={"inherit"}
            aria-label={"menu"}
            sx={{ mr: 2, p: 1 }}
          >
            <GoArrowLeft />
          </IconButton>
          <EditableInputWithIcon />
          <Box sx={{ flexGrow: 1 }} />
          <Button
            color="inherit"
            sx={{
              background:
                "linear-gradient(90deg, #464FEB 10.42%, #8330E9 100%)",
              borderRadius: 12,
              boxShadow: "0px 4px 8px 0px #00000024",
              paddingX: 2,
              paddingY: 1,
              color: "#FFFFFF",
              fontWeight: 600,
              textTransform: "capitalize",
            }}
          >
            Save Workout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
