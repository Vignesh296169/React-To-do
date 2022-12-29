import React from "react";
import Element from "./Element";
function Elementseprat(props) {
  return (
    <div>

      {props.items.map((item) => (
        <Element
         key={item.id}
         title={item.title} />
      ))}
      {/*         
        <Element title={props.items[0].title} />  
    <Element title={props.items[1].title} />   */}
    </div>
  );
}

export default Elementseprat;
