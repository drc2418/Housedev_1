import React, { useState, useEffect } from 'react';
import { Stage, Layer, Rect, Text } from 'react-konva';
import { generateBSPRooms } from '../utils/bsp';

const FloorPlanCanvas = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const generated = generateBSPRooms(800, 600, 3);
    setRooms(generated);
  }, []);

  return (
    <Stage width={800} height={600}>
      <Layer>
        {rooms.map((room, i) => (
          <React.Fragment key={i}>
            <Rect
              x={room.x}
              y={room.y}
              width={room.width}
              height={room.height}
              stroke="black"
              strokeWidth={2}
            />
            <Text x={room.x + 5} y={room.y + 5} text={room.label} fontSize={16} />
          </React.Fragment>
        ))}
      </Layer>
    </Stage>
  );
};

export default FloorPlanCanvas;
