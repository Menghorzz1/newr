import React from "react";
function CurrentTime() {
  const date = new Date();
  const currentTime = date.getHours();

  let greeting;

  const customStyle = {
    color: "",
  };
  if (currentTime < 12) {
    greeting = "Good Morning";
    customStyle.color = "red";
  } else if (currentTime < 18) {
    greeting = "Good Afternoon";
    customStyle.style = "yellow";
  } else {
    greeting = "Good Night";
    customStyle.style = "blue";
  }

  return (
    <h1 className="text-base font-bold border-b-black" style={customStyle}>
      {greeting}
    </h1>
  );
}
export default CurrentTime;
