import React, { useEffect, useRef, useState } from "react";

const AttendancePieChartFunctionality = ({
  absents,
  presents,
  leaves,
  width,
  height,
}) => {
  const canvasRef = useRef(null);
  const [hoveredSection, setHoveredSection] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const total = absents + presents + leaves;

    const drawSegment = (x, y, radius, startAngle, endAngle, color) => {
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.arc(x, y, radius, startAngle, endAngle);
      ctx.closePath();
      ctx.fillStyle = color;
      ctx.fill();
    };

    const drawPieChart = () => {
      const centerX = width / 2;
      const centerY = height / 2;
      const radius = Math.min(width, height) / 2;

      const absentAngle = (2 * Math.PI * absents) / total;
      const presentAngle = (2 * Math.PI * presents) / total;
      const leaveAngle = (2 * Math.PI * leaves) / total;

      drawSegment(centerX, centerY, radius, 0, absentAngle, "#FF6347"); // Absents
      drawSegment(
        centerX,
        centerY,
        radius,
        absentAngle,
        absentAngle + presentAngle,
        "#32CD32"
      ); // Presents
      drawSegment(
        centerX,
        centerY,
        radius,
        absentAngle + presentAngle,
        absentAngle + presentAngle + leaveAngle,
        "#1E90FF"
      ); // Leaves
    };

    drawPieChart();
  }, [absents, presents, leaves, width, height]);

  const handleHover = (section) => {
    setHoveredSection(section);
  };

  return (
    <div style={{ position: "relative" }}>
      {/* Top section for dropdown */}
      <div style={{ height: "20%", width: "100%" }}>
        {/* Add dropdown here */}
      </div>

      {/* Middle section for chart */}
      <div
        style={{
          height: "60%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <canvas
          ref={canvasRef}
          width={width}
          height={height}
          onMouseEnter={() => handleHover(null)}
        />
        {hoveredSection && (
          <div
            style={{
              position: "absolute",
              top: hoveredSection.y,
              left: hoveredSection.x,
              backgroundColor: "white",
              padding: "5px",
              borderRadius: "5px",
            }}
          >
            {hoveredSection.label}: {hoveredSection.value}
          </div>
        )}
      </div>

      {/* Bottom section for eligibility information */}
      <div
        style={{
          height: "20%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Add eligibility information here */}
      </div>
    </div>
  );
};

export default AttendancePieChartFunctionality;
