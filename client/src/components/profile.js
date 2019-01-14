/**
 * The profile section of the app is where the user will be able to see stats about 
 * their rides, and other relevant data. 
 */

import React, {Component} from 'react';
import axios from 'axios';
import { ClipLoader } from 'react-spinners';

const loadingStyles = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    marginTop: '-50px',
    marginLeft: '-100px'
}

class Profile extends Component  {
    constructor(props){
        super(props);
        this.state = {
            user : {
                firstName: '',
                lastName: '',
                rideCount: ''
            },
            loaded : false,
        }
    }

    // this function will set the values of the user profile 
    // once the page has loaded the request 
    componentDidMount(){
        this.user = this.fetchUser();
    }

    render() {
        if(this.state.loaded) {
            return (
                <div className="text-center">
                    <h2> Hi {this.state.user.firstName} {this.state.user.lastName} </h2>
                    <h3> Your total rides: {this.state.user.rideCount} </h3>
                </div>
            )  
        } else {
            return (
                <div style={loadingStyles}>
                <ClipLoader
                  sizeUnit={"px"}
                  size={125}
                  color={'#123abc'}
                  loading={this.state.loading}
                />
              </div> 
            )
        }
    }

    /** 
     * This function is responsible for performing a server request 
     * to get the user. 
    */
    fetchUser() {
        axios.get('/api/current_user').then( (res) => {
            console.log('performing fetch')
            const user = {
                firstName : res.data.firstName,
                lastName : res.data.lastName,
                rideCount : res.data.rideCount
            }
            this.setState({
                user : user,
                loaded: true
            });
        });
    }

}

export default Profile;