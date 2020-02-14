import React, {useState, useEffect} from "react";
import { connect } from 'react-redux'
import { Paper, Grid, Button } from '@material-ui/core'
import { withRouter } from 'react-router-dom'
import axios from 'axios'


const RegisterToVote = (props) => {
  const [ linkUrl, setLinkUrl ] = useState('')

  const checkState = () => {
    console.log('fired the check state')
    axios.get(`/api/states/${props.usState}`)
      .then( res => setLinkUrl(res.data))
      .catch( err => console.log(err) )
  }

  useEffect(() => {
    checkState()
  }, [])

  return (
    <>
      <Button 
        variant="contained" 
        color="secondary"
      >
        <a
          target="_blank"
          rel="noopener"
          href={linkUrl}
          style={{color: 'inherit', textDecoration: 'inherit'}}
        >
          Register To Vote
        </a>
      </Button>
    </>
    )
};



const mapStateToProps = reduxState => {
  return reduxState
}

export default withRouter(connect(mapStateToProps, {})(RegisterToVote));