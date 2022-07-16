// Import Library
import React, { useEffect, useState } from "react";

// import Material icons CSS
import "material-icons/iconfont/material-icons.css";

function ToastItem(props) {
  // Destructuring props
  const {
    id,
    type = "success",
    timeout,
    title = "title",
    onClick = () => {},
  } = props;

  //Required State
  const [show, setShow] = useState(true);

  // required Side effects
  useEffect(() => {
    if (timeout) {
      let timer = setTimeout(() => {
        setShow(false);
      }, timeout);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [timeout]);

  // Styles
  let outerBox = {
    background:
      type === "success"
        ? "rgb(104, 156, 114)"
        : type === "error"
        ? "rgb(196, 85, 76)"
        : "gray",
    height: "40px",
    width: "300px",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0px 5px",
    boxShadow: " rgba(149, 157, 165, 0.2) 0px 8px 24px",
  };

  let commonIconStyle = {
    color: "white ",
    cursor: "pointer",
  };
  let titleStyle = {
    color: "white ",
  };

  return (
    <div style={{ padding: "5px 10px" }}>
      {show && (
        <div style={outerBox}>
          {type === "success" && (
            <span className="material-icons-round" style={commonIconStyle}>
              check_circle
            </span>
          )}
          {type === "error" && (
            <span className="material-icons-round" style={commonIconStyle}>
              error
            </span>
          )}
          <p style={titleStyle}>{title}</p>
          <span
            className="material-icons-round"
            style={commonIconStyle}
            onClick={(e) => onClick(e, id)}
          >
            close
          </span>
        </div>
      )}
    </div>
  );
}

export default ToastItem;
