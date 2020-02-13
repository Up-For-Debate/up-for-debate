import React from "react";
import { connect } from 'react-redux'
import { Paper, Grid, Button } from '@material-ui/core'
import { withRouter } from 'react-router-dom'


const RegisterToVote = (props) => {

const checkState = (place) => {
  switch(place){
    case 'Utah':
      return 'https://secure.utah.gov/voterreg/login.html?selection=REGISTER'
    default:
      return 'https://vote.gov/register/ar/'
  }
}

  return (
    <>
      <Paper>
        <Grid container style={{justifyContent:'center'}}>
          <Grid item >
            <Button 
              variant="contained" 
              color="secondary"

            >
              Register To Vote
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </>
    )
};



const mapStateToProps = reduxState => {
  return reduxState
}

export default withRouter(connect(mapStateToProps, {})(RegisterToVote));