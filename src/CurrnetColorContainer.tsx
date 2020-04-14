import React from "react";
import CurrentColor from "./CurrentColor";

type Props = {
  pageColor: string;
};

export default function CurrnetColorContainer({
  pageColor = "paleyellow",
}: Props) {
  // const [recentColors, setRecentColors] = useState('');

  return (
    <div className="container-sm">
      <CurrentColor pageColor={pageColor} />
    </div>
  );
}

//  /startcolor
