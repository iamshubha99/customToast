// Import Library
import React, { useState } from "react";

// Import Custom Component
import ToastContainer from "./components/ToastContainer";

// Static Data(Toast)
let data = [
  { id: 1, type: "success", timeout: 7000, title: "Custom Title 1" },
  { id: 2, type: "error", timeout: 10000, title: "Custom Title 2" },
  { id: 3, type: "success", title: "Custom Title 3" },
];

function Main() {
  // Required State
  const [toastData, setToastData] = useState(data);

  // Handler Functions
  const handleClose = (e, id) => {
    let filteredvalue = toastData.filter((el) => el.id !== id);
    setToastData(filteredvalue);
  };

  // Styles
  const mainContainerStyles = {
    height: "100%",
    width: "100%",
    boxSizing: "border-box",
  };

  const toastContainerWrapper = {
    height: "100%",
    width: "100%",
    boxSizing: "border-box",
    position: "relative",
  };

  return (
    <div className="mainContainer" style={mainContainerStyles}>
      <div style={toastContainerWrapper}>
        <ToastContainer
          toastData={toastData}
          onClick={handleClose}
          position="topLeft"
        />
      </div>
    </div>
  );
}

export default Main;
