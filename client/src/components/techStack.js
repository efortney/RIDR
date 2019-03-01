/**
 * Tech stack is where we will show off the technologies used in RIDR. 
 * 
 */
import React from 'react';
import '../styles/landing.css';

const tech = () => {
    const rowStyle = {
        marginTop: '1.5rem'
    }

    const cardStyle = {
        padding: '1rem',
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        backgroundColor: '#f4f4f4',
    }


    const imageStyle = {

    }

    return(
        <body>
        <div>
            <div className="bg">
                <h1 className='hero-text'> RIDR TECH</h1>
            </div>

            <div className="container">
                <div className="row" style={rowStyle}>
                    <div className="col-md-6 text-left" style={cardStyle}>
                  
                        <hr />
                        <p>
                        It is no secret that depending on the time of day, Uber can be cheaper than Lyft, and vice versa. 
                        It was tiring checking both apps to see where the best deal was, so we created RIDR. 
                        RIDR is a proof of concept that was developed by three students at 
                        Missouri Western State University in order to show that it was possible to aggregate all the data 
                        neccesary and display them in one place. Originally, we wanted to allow users to order rides 
                        directly from our app, but we quickly discovered that it would be almost impossible given 
                        our time frame and the fact that our application is web based. 
                        </p>
                    </div>
                </div>

                <div className="row" style={rowStyle}>
                    <div className="col-md-">
                    </div>
                </div>
            </div>
        </div>
        </body>
    );
}

export default tech;