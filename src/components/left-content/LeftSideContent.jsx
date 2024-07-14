import React from "react";
import { Box } from "@mui/material";
import { Draggable, Droppable } from "@hello-pangea/dnd";
import { allWorkoutBlogs } from "../../assets/data";
import WorkoutItem from "./WorkoutItem";

const LeftSideContent = ({ handleItemClick }) => {
  return (
    <div
      style={{
        flex: "1 1 30%",
        border: "1px solid black",
        padding: "10px",
        minHeight: "400px",
      }}
    >
      <Box my={2} fontWeight={600} textAlign={"center"}>
        Click or drag the blocks to build workout
      </Box>
      <Droppable droppableId="leftSideContent">
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            style={{ height: "100%" }}
          >
            {allWorkoutBlogs.map((item, index) => (
              <Draggable key={item.id} draggableId={`${item.id}`} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    onClick={() => handleItemClick(item)}
                  >
                    <WorkoutItem {...item} />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default LeftSideContent;
