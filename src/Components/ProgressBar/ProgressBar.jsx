import "./ProgressBar.css";

export const ProgressBar = ({ bgcolor, completed }) => {
  // const containerStyles = {
  //   backgroundColor: "rgba(219,85,129,.12549019607843137)",
  //   borderRadius: "5px",
  //   color: "#db5581",
  //   height: "24px",
  //   marginBottom: ".1rem",
  //   marginTop: ".1rem",
  //   position: "relative",
  // };

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: "rgba(219,85,129,.6)",
    borderRadius: "inherit",
    textAlign: "right",
    // backgroundImage:
    //   linear -
    //   gradient(
    //     "45deg",
    //     "rgba(219,85,129,.6) 25%",
    //     "rgba(219,85,129,.12549019607843137) 0",
    //     "rgba(219,85,129,.12549019607843137) 50%",
    //     "rgba(219,85,129,.6) 0,rgba(219,85,129,.6) 75%",
    //     "rgba(219,85,129,.12549019607843137) 0",
    //     "rgba(219,85,129,.12549019607843137)"
    //   ),
  };

  const labelStyles = {
    padding: 5,
    color: "white",
    fontWeight: "bold",
  };

  return (
    <div className="container-styles">
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${completed}%`}</span>
      </div>
    </div>
  );
};
