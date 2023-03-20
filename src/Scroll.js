
import React from "react";

const Scroll = (props) => {
    return (
      <div style = {{overflowY:'scroll', border:'5px',height:'93.9vh'}}>
        {props.children}
      </div>
    )
  }

  export default Scroll;

