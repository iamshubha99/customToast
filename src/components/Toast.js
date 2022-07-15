import React from "react";
import "material-icons/iconfont/material-icons.css";
function Toast(props) {
  console.log("Toast props: ", props);
  const {
    type = "success",
    position = "topLeft",
    timeout = 10000,
    title = "title",
    data,

    onClick = () => {},
  } = props;

  let toastContainer = {
    position: "absolute",
    height: "100vh",
    width: "100vw",
    background: "transparent",
  };
  let outerBox = {
    background: type === "success" ? "#61ff8e" : "error" ? "#ff5a5a" : "",
    height: "40px",
    width: "300px",
    borderRadius: "3px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0px 5px",
  };

  let commonIconStyle = {
    color: "white ",
  };
  let titleStyle = {
    color: "white ",
  };

  return (
    <div
      style={{
        position: "absolute",
        // right: "0px",
      }}
    >
      {data.map((el) => {
        console.log("el: ", el);
        return (
          <div style={{ padding: "5px 10px" }}>
            {/* {el.type === "success" && ( */}
            <div
              style={{
                ...outerBox,
                background:
                  el.type === "success"
                    ? "#61ff8e"
                    : el.type === "error"
                    ? "#ff5a5a"
                    : "black",
              }}
            >
              <span
                className="material-icons-round"
                style={{ ...commonIconStyle }}
              >
                check_circle
              </span>
              <p style={titleStyle}>{title}</p>
              <span
                class="material-icons-round"
                style={{ ...commonIconStyle, cursor: "pointer" }}
                onClick={(e) => onClick(e, el.id)}
              >
                close
              </span>
            </div>
            {/* )} */}
          </div>
        );
      })}
    </div>
  );
}

export default Toast;
