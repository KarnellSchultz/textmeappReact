import React, { useState, useEffect } from "react";
import StepOne from "./StepOne";
import MoreColorsContainer from "./MoreColorsContainer";
import CurrnetColorContainer from "./CurrnetColorContainer";
import Header from "./Header";
// import EnterColorContainer from './EnterColorContainer';

// type Props = {

// }

export default function Page() {
  const [pageColor, setPageColor] = useState("BlanchedAlmond");

  const getColors = () => {
    fetch("/startcolor")
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        console.log(myJson);
        setPageColor(myJson);
      });
  };

  useEffect(() => {
    setPageColor("BlanchedAlmond");
    getColors();
  }, []);

  const pageElement: HTMLElement | null = document.getElementById("body");
  if (pageElement) {
    pageElement.style.background = pageColor;
  }

  return (
    <>
      <Header />
      <div className="container-fluid text-center ">
        <StepOne />
        <h3>Step 2</h3>
        <CurrnetColorContainer pageColor={pageColor} />
        <h3>Step 3</h3>
        <MoreColorsContainer />
        {/* <EnterColorContainer /> */}
        {/* <button onClick={getColors}>press</button> */}
      </div>
    </>
  );
}
