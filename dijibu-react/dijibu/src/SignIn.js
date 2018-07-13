import React from 'react';

function SignIn() {
    return (
      <div className="sign-in">
      <style jsx>{`
        .sign-in input {
          display: block;
        }
      `}
      </style>
        <h1>SignIn</h1>
        <form>
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Password" />
          <button type="submit">Sign In</button>
        </form>
      </div>
    );
}

export default SignIn;
