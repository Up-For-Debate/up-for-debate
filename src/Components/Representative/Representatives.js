import React, { Component} from "react";
import axios from "axios";
import RepCard from "../RepCard/RepCard";
import { HashLink as Link } from "react-router-hash-link";
import { connect } from "react-redux";
import { Grid, Button } from "@material-ui/core";


class Representatives extends Component{
  constructor(){
    super()
    this.state= {
      offices: [],
      officials: [],
      loading: true
    }
  }
  handleChange(key, value) {
    this.setState(
      {
        [key]: value
      }
    )
  }

  filterRepName = repName => {
    const split = repName.split(" ");
    const countyIndex = split.indexOf("County");
    const spliced = split.splice(0, countyIndex);
    const string = spliced.toString().replace(",", "-");
    return string;
  };

  combined = async () => {
    // console.log('1111111111111111111111111111')
    this.handleChange('offices', [])
    this.handleChange('officials', [])
    // console.log('22222222222222222222222222222', offices, officials)
    // setTimeout(()=>{
    //   console.log('3333333333333333333333333333333', offices, officials)
    // }, 15000)
    if (this.props.usState !== null) await this.getReps();
    if (this.state.offices[1] && this.state.officials[1] && this.props.usState !== null) {
      this.connectReps();
    }
  };

  componentDidUpdate(prevProps) {
    prevProps === this.props ? console.log('No CDU'): this.combined()
  }

  getReps = () => {
    console.log('hit getReps 444444444444444444444444444')
    let { city, usState } = this.props;
    axios
      .get(`/api/representatives?address=${city ? city : ""} ${usState}`)
      .then(res => {
        console.log('55555555555555555555555555', res.data)
        // uncomment the above line and delete the below line when we no longer want to do styling/changes to representatives or rep cards
        // axios.get(`/api/representatives?address=vineyard utah`).then(res => {
        this.handleChange('offices', res.data.offices);
        this.handleChange('officials', res.data.officials);
        this.handleChange('loading', false);
      });
  };
  connectReps = () => {
    console.log("connect Reps fired");
    const connectedReps = this.state.offices
      .map(ele => {
        return ele.officialIndices.map(element => {
          if (this.state.officials[element].address) {
            var repAddress = this.state.officials[element].address[0];
        
          }
          if (this.state.officials[element].urls) {
            var url = this.state.officials[element].urls[0];
          
          }
          if (this.state.officials[element].phones) {
            var phone = this.state.officials[element].phones[0];
          
          }
          const person = {
            divisionId: ele.divisionId,
            title: ele.name,
            officalName: this.state.officials[element].name,
            party: this.state.officials[element].party,
            address: repAddress, //This is an object
            url: url,
            phone: phone,
            socialMedia: this.state.officials[element].channels
              ? this.state.officials[element].channels
              : null
          };
          // console.log(person)
          return person;
        });
      })
      .flat();
    console.log(connectedReps);
    let countyReps = connectedReps
      .filter(ele => ele.divisionId.includes("county"))
      .map(rep => {
        return (
          <>
            <Grid item xs={4}>
              <RepCard person={rep} />
            </Grid>
            <style>{`#${this.filterRepName(
              rep.title
            )}-county{fill: tomato;}`}</style>
          </>
        );
      });
    let stateReps = connectedReps
      .filter(
        ele =>
          ele.divisionId.includes("state") &&
          ele.divisionId.indexOf("county") === -1
      )
      .map(rep => {
        return (
          <Grid item xs={4}>
            <RepCard person={rep} />
          </Grid>
        );
      });
    let fedReps = connectedReps
      .filter(
        ele =>
          ele.divisionId.includes("country") &&
          ele.divisionId.indexOf("state") === -1
      )
      .map(rep => {
        return (
          <Grid item xs={4}>
            <RepCard person={rep} />
          </Grid>
        );
      });
    return (
      <Grid container>
        <Grid item xs={12}>
          <Button color="primary">
            <Link to="#county-rep">County Info</Link>
          </Button>
          <Button color="primary">
            <Link to="#state-rep">State Info</Link>
          </Button>
          <Button color="primary">
            <Link to="#federal-rep">Federal Info</Link>
          </Button>
        </Grid>
        <Grid item xs={12}>
          <h2 id="county-rep">County Representatives</h2>
        </Grid>
        {countyReps}
        <Grid item xs={12}>
          <h2 id="state-rep">State Representatives</h2>
        </Grid>
        {stateReps}
        <Grid item xs={12}>
          <h2 id="federal-rep">Federal Representatives</h2>
        </Grid>
        {fedReps}
      </Grid>
    );
  };

  render(){
  return <div>{!this.state.loading && this.connectReps() ? this.connectReps() : "loading"}</div>;
  }
};

const mapStateToProps = reduxState => {
  return reduxState;
};

export default connect(mapStateToProps, {})(Representatives);
