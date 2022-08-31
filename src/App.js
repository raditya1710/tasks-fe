import { useState } from "react";
import { useInterval } from "./utils";
import ProgressBar from "./ProgressBar";
import { Text } from "./Text";
import "./App.css";

function App() {
  const dateStart = "08 Aug 2022 07:00:00 GMT+7";
  const dateEnd = "02 Sep 2022 17:00:00 GMT+7";

  const timestampStart = Date.parse(dateStart);
  const timestampEnd = Date.parse(dateEnd);

  const [now, setNow] = useState(new Date().getTime());

  useInterval(() => {
    setNow(new Date().getTime());
  }, 40);

  const percentage = Math.min(
    100,
    ((now - timestampStart) / (timestampEnd - timestampStart)) * 100
  );
  const percentageFloat = percentage.toFixed(6);

  return (
    <div className="App">
      <div className="textContainer">
        <div className="startContainer">
          <Text title={`Start: ${dateStart}`} />
        </div>
        <div className="endContainer">
          <Text title={`End: ${dateEnd}`} />
        </div>
      </div>
      <ProgressBar completed={percentageFloat} />
    </div>
  );
}

export default App;
