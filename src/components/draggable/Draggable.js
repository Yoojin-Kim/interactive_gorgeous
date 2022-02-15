import React, { useEffect, useRef } from "react";
import { useSpring, animated, to } from "@react-spring/web";
import { useGesture } from "react-use-gesture";


const calcX = (y, ly) => -(y - ly - window.innerHeight / 2) / 20
const calcY = (x, lx) => (x - lx - window.innerWidth / 2) / 20


const Draggable = ({image}) => {
  const domTarget = useRef(null);

  const [{ x, y, scale, rotateX, rotateY, rotateZ }, api] = useSpring(() => ({
    scale: 1,
    x: 0,
    y: 0,
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  useGesture(
    {
      onDrag: ({ active, offset: [x, y] }) =>
        api({ x, y, rotateX: 0, rotateY: 0, scale: active ? 1 : 1.1 }),
      onMove: ({ xy: [px, py], dragging }) =>
        !dragging &&
        api({
          rotateX: calcX(py, y.get()),
          rotateY: calcY(px, x.get()),
          scale: 1.1,
        }),
      onHover: ({ hovering }) =>
        !hovering && api({ rotateX: 0, rotateY: 0, scale: 1 }),
    },
    { domTarget, eventOptions: { passive: false } }
  );


  return (
      <animated.div
        ref={domTarget}
        className="draggable-wrapper"
        style={{
          backgroundImage: `url(${image})`,
          rotateX,
          rotateY,
          rotateZ,
          transform: to([x,y], (x,y) => `translate(${x}px,${y}px)`),
          scale: to([scale], (s) => s),
        }}
      />
  );
};

export default Draggable;
