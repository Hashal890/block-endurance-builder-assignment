import React, { useState } from "react";
import { Container } from "@mui/material";
import { DragDropContext } from "@hello-pangea/dnd";
import LeftSideContent from "../components/left-content/LeftSideContent";
import RightSideContent from "../components/right-content/RightSideContent";
import { allWorkoutBlogs } from "../assets/data";

const MainContent = () => {
  const [barGraphContentData, setBarGraphContentData] = useState([]);

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const sourceIndex = result.source.index;
    if (
      result.source.droppableId === "leftSideContent" &&
      result.destination.droppableId === "rightSideContent"
    ) {
      const newItem = allWorkoutBlogs[sourceIndex];
      setBarGraphContentData([...barGraphContentData, newItem]);
    }
  };

  const handleItemClick = (item) => {
    setBarGraphContentData([...barGraphContentData, item]);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Container sx={{ marginTop: 15 }}>
        <div style={{ display: "flex", gap: "10px" }}>
          <LeftSideContent handleItemClick={handleItemClick} />
          <RightSideContent />
        </div>
      </Container>
    </DragDropContext>
  );
};
export default MainContent;
