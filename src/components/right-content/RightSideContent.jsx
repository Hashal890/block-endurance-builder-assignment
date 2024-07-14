import React from "react";
import { Button } from "@mui/material";
import { Droppable } from "@hello-pangea/dnd";
import BarGraph from "./BarGraph";

const RightSideContent = ({ handleClearBlocks, barGraphContentData }) => {
  return (
    <div
      style={{
        flex: "1 1 70%",
        border: "1px solid black",
        padding: "10px",
        minHeight: "400px",
      }}
    >
      <Button
        variant="contained"
        color="secondary"
        onClick={handleClearBlocks}
        style={{ marginBottom: "50px" }}
      >
        Clear Blocks
      </Button>
      <Droppable droppableId="rightSideContent">
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            style={{ height: "100%" }}
          >
            {!barGraphContentData || barGraphContentData.length === 0 ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 25,
                }}
              >
                No data available
              </div>
            ) : (
              <BarGraph data={barGraphContentData} />
            )}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default RightSideContent;
