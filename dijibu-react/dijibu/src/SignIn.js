import React from 'react';

function SignIn() {
    return (
      <div>
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
