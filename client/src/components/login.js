import React from 'react';

const login = () => {
  return (
    <div className="row">
    <div className="container text-center">
        <div className="card">
          <h5> Welcome to RIDR, please sign in. </h5>
          <hr />
          <a href="/auth/google">
            <button className="btn blue">Sign In With Google</button>
          </a>
          <form>
            <input placeholder="Username" id="username" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default login;
