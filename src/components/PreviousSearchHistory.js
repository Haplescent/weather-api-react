import React from "react";

import TemporaryDrawer from "./TemporaryDrawer.js";

export default function PreviousSearchHistory(props) {
  let html = <div></div>;
  if (props.searchHistory.length > 0) {
    let array = props.searchHistory.map((text) => (
      <button onclick="" value={text}>
        {text}
      </button>
    ));
    console.log(array);
    return array;
  } else {
    return <h1>{props.searchHistory}</h1>;
  }
}
