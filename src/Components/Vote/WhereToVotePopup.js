import React, { useState } from "react";
import { connect } from "react-redux";
import { setStreetAddressZipcode } from "../../redux/addressReducer";
import { withRouter } from "react-router-dom";
import { TextField, Button, IconButton } from "@material-ui/core";
import ClearRoundedIcon from "@material-ui/icons/ClearRounded";

const WhereToVotePopup = props => {
  const [zipcode, setZipcode] = useState("");
  const [streetAddress, setStreetAddress] = useState("");

  const handleWhereToVoteClick = async () => {
    await props.setStreetAddressZipcode(streetAddress, zipcode);
    await checkAddress();
  };
  const checkAddress = () => {
    if (streetAddress && zipcode) {
      props.history.push("/vote");
    } else if (streetAddress) {
      alert("Please Fill In Your Zipcode");
    } else if (zipcode) {
      alert("Please Fill In Your Address");
    } else {
      alert("Please Fill In Your Address and Zipcode");
    }
  };

  return (
    <div
      style={{
        top: "30%",
        background: "white",
        height: "400px",
        width: "325px",
        position: "fixed",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "flex-start",
        zIndex: "999",
        boxShadow: "4px 4px 4px 4px rgba(0, 0, 0, .5)",
        padding: "10px"
      }}
    >
      <IconButton
        onClick={() => props.setDisplayPopup(false)}
        style={{ position: "absolute", top: "10px", right: "10px" }}
      >
        <ClearRoundedIcon />
      </IconButton>
      <h2
        style={{
          padding: "5px",
          marginTop: "25px",
          fontFamily: "Muli sanserif"
        }}
      >
        Please Enter Your Full Address
      </h2>

      <p style={{ marginLeft: "18%" }}>
        <TextField
          id="outlined-required"
          label="Street Address"
          variant="outlined"
          onChange={e => setStreetAddress(e.target.value)}
          size="small"
          padding="dense"
          style={{ marginTop: "-10px" }}
          required
        />
      </p>
      <p style={{ marginLeft: "20%" }}>
        City:{" "}
        <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
          {props.city}
        </span>
      </p>
      <p style={{ marginLeft: "9%", marginLeft: "22%" }}>
        State:{" "}
        <span
          style={{
            fontSize: "1.2rem",
            fontWeight: "bold"
          }}
        >
          {props.usState}
        </span>
      </p>
      <p style={{ marginLeft: "18%" }}>
        <TextField
          required
          id="outlined-required"
          label="Zipcode"
          variant="outlined"
          size="small"
          padding="dense"
          style={{ marginTop: "-10px" }}
          onChange={e => setZipcode(e.target.value)}
        />
      </p>

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center"
        }}
      >
        <Button
          variant="contained"
          color="secondary"
          onClick={() => handleWhereToVoteClick()}
        >
          Find Out Where To Vote!
        </Button>
      </div>
    </div>
  );
};

const mapStateToProps = reduxState => {
  return reduxState;
};
export default connect(mapStateToProps, { setStreetAddressZipcode })(
  withRouter(WhereToVotePopup)
);
