import React from 'react';
import { Button } from 'react-bootstrap';


const Welcome = (props) => {

    const login = () => {
        props.history.push("/login")
    }

    const signup = () => {
        props.history.push("/signup")
    }

    return(
        <div className="welcome">
          <div className="welcome-text">
            <img
              style={{
              width: "30%",
              justifyContent: "center",
            }}
            src="https://www.logolynx.com/images/logolynx/47/4718783b27b71677a205ebed08d2cf4c.png"
          />
          <h1 id="welcome-second-header" style={{"color": "#F8F8F8"}}>The Writing App!</h1>
          <Button style={{"margin-right":"10px"}} variant="dark" onClick={login}>Login</Button>
          <Button style={{"margin-left":"10px"}} variant="dark" onClick={signup}>Sign Up</Button>
          </div>
        </div>
    )

}

export default Welcome;