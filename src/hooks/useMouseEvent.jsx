import { useState } from "react";

export const useEnterLeaveMouse = () => {
  const [mouseEvent, setMouseEvent] = useState("");

  const handleMouseEnter = (e) => {
    setMouseEvent(e);
  };
  const handleMouseLeave = (e) => {
    setMouseEvent(e);
  };

  return [handleMouseEnter, handleMouseLeave, mouseEvent];
};

export const useMouseClick = () => {
  const [mouseEvent, setMouseEvent] = useState(false);

  const handleMouseClick = () => {
    setMouseEvent(!mouseEvent);
  };

  return [handleMouseClick, mouseEvent];
};
