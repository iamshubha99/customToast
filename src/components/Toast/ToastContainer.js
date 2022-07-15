// Import Library
import React from "react";

// Import Custom Component
import Toast from "./Toast";

function ToastContainer(props) {
  // destructuring props
  const { position = "topLeft", toastData = [], onClick = () => {} } = props;

  // Style Variables
  const positionStyle =
    position === "topLeft"
      ? { left: "0px" }
      : position === "topRight"
      ? { right: "0px" }
      : position === "bottomLeft"
      ? { bottom: "0px" }
      : position === "bottomRight"
      ? { bottom: "0px", right: "0px" }
      : "";

  return (
    <div style={{ ...positionStyle, position: "absolute" }}>
      {toastData.map((el, index) => {
        return (
          <div key={index}>
            <Toast {...el} onClick={onClick} />
          </div>
        );
      })}
    </div>
  );
}

export default ToastContainer;
