import React, { useState } from "react";
import { TextField, IconButton, InputAdornment } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const EditableInputWithIcon = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState("Run Workout");

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  return (
    <TextField
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
      variant={"standard"}
      sx={{
        "& .MuiInputBase-input": {
          padding: 0,
        },
        "& .MuiInputAdornment-root": {
          marginLeft: 0,
        },
        width: "130px",
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position={"end"}>
            <IconButton
              onClick={handleEditClick}
              edge={"end"}
              aria-label={"edit"}
              size={"small"}
              sx={{
                padding: 0,
              }}
            >
              <EditIcon />
            </IconButton>
          </InputAdornment>
        ),
        readOnly: !isEditing,
        disableUnderline: true,
      }}
    />
  );
};

export default EditableInputWithIcon;
