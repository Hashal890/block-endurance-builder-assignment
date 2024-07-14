import React from "react";
import { Card, CardContent, Typography, Divider } from "@mui/material";

const WorkoutItem = ({
  title,
  numberOfSections,
  sectionNames,
  lengthInKilometres,
  percentage,
}) => {
  return (
    <Card style={{ marginBottom: "10px" }}>
      <CardContent>
        <Typography fontSize={"20px"}>{title}</Typography>
        <Typography fontSize={"16px"} mt={0.5}>
          Sections: {numberOfSections}
        </Typography>
        {numberOfSections > 1 && (
          <div style={{ marginTop: "10px" }}>
            {sectionNames.map((sectionName, index) => (
              <div key={index} style={{ marginBottom: "8px", padding: "4px" }}>
                <Typography>
                  {sectionName}: {lengthInKilometres[index]} km,{" "}
                  {percentage[index]}%
                </Typography>
                {index !== sectionNames.length - 1 && <Divider />}
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default WorkoutItem;
