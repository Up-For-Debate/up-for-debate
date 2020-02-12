import React, { useState, useEffect } from "react";
import axios from "axios";
import RepCard from "../RepCard/RepCard";
import { HashLink as Link } from "react-router-hash-link";

const Representatives = () => {
  const [offices, setOffices] = useState([]);
  const [officials, setOfficals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getReps();
  }, []);
  useEffect(() => {
    if (offices[1] && officials[1]) {
      connectReps();
    }
  }, [offices, officials]);
  const getReps = () => {
    axios.get(`/api/representatives?address=vineyard utah`).then(res => {
      setOffices(res.data.offices);
      setOfficals(res.data.officials);
      setLoading(false);
    });
  };
  const connectReps = () => {
    const connectedReps = offices
      .map(ele => {
        return ele.officialIndices.map(element => {
          if (officials[element].address) {
            var repAddress = officials[element].address[0];
          }
          if (officials[element].urls) {
            var url = officials[element].urls[0];
          }
          if (officials[element].phones) {
            var phone = officials[element].phones[0];
          }
          const person = {
            divisionId: ele.divisionId,
            title: ele.name,
            officalName: officials[element].name,
            party: officials[element].party,
            address: repAddress, //This is an object
            url: url,
            phone: phone,
            socialMedia: officials[element].channels
              ? officials[element].channels
              : null
          };
          return person;
        });
      })
      .flat();
    console.log(connectedReps);
    const countyReps = connectedReps
      .filter(ele => ele.divisionId.includes("county"))
      .map(rep => {
        return <RepCard person={rep} />;
      });
    const stateReps = connectedReps
      .filter(
        ele =>
          ele.divisionId.includes("state") &&
          ele.divisionId.indexOf("county") === -1
      )
      .map(rep => {
        return <RepCard person={rep} />;
      });
    const fedReps = connectedReps
      .filter(
        ele =>
          ele.divisionId.includes("country") &&
          ele.divisionId.indexOf("state") === -1
      )
      .map(rep => {
        return <RepCard person={rep} />;
      });
    return (
      <div style={{ width: "600px", height: "100px" }}>
        <div>
          <Link to="#state-rep">State Info</Link>
          <Link to="#county-rep">County Info</Link>
          <Link to="#federal-rep">Federal Info</Link>
        </div>
        <h2 id="county-rep">County Representatives</h2>
        {countyReps}
        <h2 id="state-rep">State Representatives</h2>
        {stateReps}
        <h2 id="federal-rep">Federal Representatives</h2>
        {fedReps}
      </div>
    );
  };

  return <div>{!loading && connectReps() ? connectReps() : "loading"}</div>;
};
export default Representatives;
