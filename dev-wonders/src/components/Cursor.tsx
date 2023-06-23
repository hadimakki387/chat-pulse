import React, { useEffect, useRef, useState } from "react";

const Cursor = () => {
  const cursorRef = useRef(null);
  const [hoveredElement, setHoveredElement] = useState(null);

  const updateProperties = (elem, state) => {
    elem.style.setProperty("--x", `${state.x}px`);
    elem.style.setProperty("--y", `${state.y}px`);
    elem.style.setProperty("--width", `${state.width}px`);
    elem.style.setProperty("--height", `${state.height}px`);
    elem.style.setProperty("--radius", state.radius);
    elem.style.setProperty("--scale", state.scale);
  };

  const createState = (e) => {
    const defaultState = {
      x: e.clientX,
      y: e.clientY,
      width: 80,
      height: 80,
      radius: "50%",
    };

    const computedState = {};

    if (hoveredElement != null) {
      const { top, left, width, height } = hoveredElement.getBoundingClientRect();
      const radius = window.getComputedStyle(hoveredElement).borderTopLeftRadius;

      computedState.x = left + width / 2;
      computedState.y = top + height / 2;
      computedState.width = width;
      computedState.height = height;
      computedState.radius = radius;
    }

    return {
      ...defaultState,
      ...computedState,
    };
  };

  const handleMouseMove = (e) => {
    const state = createState(e);
    updateProperties(cursorRef.current, state);
  };

  const handleElementMouseEnter = (elem) => {
    setHoveredElement(elem);
  };

  const handleElementMouseLeave = () => {
    setHoveredElement(null);
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    const elements = document.querySelectorAll("div.hoverable"); // Add the 'hoverable' class to the div elements you want to be hovered
    elements.forEach((elem) => {
      elem.addEventListener("mouseenter", () => handleElementMouseEnter(elem));
      elem.addEventListener("mouseleave", handleElementMouseLeave);
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      elements.forEach((elem) => {
        elem.removeEventListener("mouseenter", () =>
          handleElementMouseEnter(elem)
        );
        elem.removeEventListener("mouseleave", handleElementMouseLeave);
      });
    };
  }, []);

  return <div className="cursor" ref={cursorRef}></div>;
};

export default Cursor;
