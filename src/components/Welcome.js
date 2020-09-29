import React from 'react';


const Welcome = (props) => {

    const login = () => {
        props.history.push("/login")
    }

    const signup = () => {
        props.history.push("/signup")
    }

    return(
        <div className="welcome">
        <h1>Welcome to the</h1>
        <img
          style={{
            width: "30%",
            height: "10%",
            color: "white",
            justifyContent: "center",
          }}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Harry_Potter_wordmark.svg/2180px-Harry_Potter_wordmark.svg.png"
        />
        <h1>Writing App!</h1>
        <button onClick={login}>Login</button>
        <button onClick={signup}>Sign Up</button>
        </div>
    )

}

export default Welcome;