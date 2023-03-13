import React from 'react'

function Button({ status }) {
  function login() {
    // if we are not logged in, route to /login
    // if we are logged in, route to /logout
  }
    return (
      <>
        <button onClick={login}>{status ? 'Logout' : 'Login'}</button>
      </>
    );
};

export default Button;