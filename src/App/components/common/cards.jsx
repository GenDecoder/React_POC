import React from "react";

export const Part = props => {
  const {
    part: { partId, size }
  } = props;
  return (
    <div style={Styles.part} key={partId}>
      {size}
    </div>
  );
};

const Styles = {
  part: {
    backgroundColor: "#f2f2f2",
    fontWeight: "bold",
    padding: "5px"
  }
};
