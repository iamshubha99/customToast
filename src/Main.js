import React from "react";

import Toast from "./components/Toast";

let data = [
  { id: 1, type: "success", timeout: 10000, title: "title" },
  { id: 2, type: "error", timeout: 10000, title: "title" },
  { id: 3, type: "success", timeout: 10000, title: "title" },
];
function Main() {
  //   const mainContainer = {
  //     position: "absolute",
  //   };

  const [toastData, setToastData] = React.useState(data);

  const handleClose = (e, id) => {
    console.log("id: ", e, id);

    let filteredvalue = toastData.filter((el) => el.id !== id);

    setToastData(filteredvalue);
  };

  return (
    <div className="mainContainer">
      Main
      <Toast data={toastData} onClick={handleClose} />
    </div>
  );
}

export default Main;
