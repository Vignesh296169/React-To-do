import Elementseprat from "./components/Elementseprat";
import Newaddform from "./components/Newform/Newaddform";
import { useState } from "react";

const Dummy = [
  {
    id: 1,
    title: "wake-up (6 Am)",
  },
  {
    id: 2,
    title: "exercise(6:30 Am)",
  },
];

function App() {
  const [initial, setUpdate] = useState(Dummy);
  const addDataHandler = (singaladdform) => {
    setUpdate((previous) => {
      return [singaladdform, ...previous];
    });
  };
  return (
    <div>
      <h1>To-Do-List</h1>
      <Newaddform onAdddata={addDataHandler} />
      
        <Elementseprat items={initial} />
     
      <p style={{ opacity: 0.5 }}>-Vignesh.</p>
    </div>
  );
}

export default App;
