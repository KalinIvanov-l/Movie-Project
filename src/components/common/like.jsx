import React from "react";

//Stateless Function Component
const Like = (props) => {
  let classes = "fa fa-heart";

  if (!props.liked) classes += "-o";
  return (
    <i
      onClick={props.onClick}
      style={{ cursor: "pointer" }}
      className={classes}
      area-hidden="true"
    />
  );
};

export default Like;
