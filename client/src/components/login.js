import React from 'react';

const login = () => {
  return (
    <div className="row">
    <div className="container text-center">
        <div className="card">
          <h5> Welcome to RIDR, please sign in. </h5>
          <hr />
          <a href="/auth/google">
            <button className="btn btn-primary">Sign In With Google</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default login;
