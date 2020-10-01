import React from 'react';
import '../fonts/HARRYP__.TTF'


const Welcome = (props) => {

    const login = () => {
        props.history.push("/login")
    }

    const signup = () => {
        props.history.push("/signup")
    }

    return(
        <div className="welcome">
        <h1 style={{"color": "#F8F8F8"}}>Welcome to the</h1>
        <img
          style={{
            width: "30%",
            justifyContent: "center",
          }}
          src="https://www.logolynx.com/images/logolynx/47/4718783b27b71677a205ebed08d2cf4c.png"
        />
        <h1 style={{"color": "#F8F8F8"}}>Writing App!</h1>
        <button onClick={login}>Login</button>
        <button onClick={signup}>Sign Up</button>
        </div>
    )

}

export default Welcome;