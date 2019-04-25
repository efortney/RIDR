import React, {Component} from 'react';
import Axios from 'axios';
import Bar from './Bar';

export default class LocalHotSpots extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user_location : this.props.location,
            top_bars :  [],
        }

        this.getTopBars = this.getTopBars.bind(this);
    }


    componentWillMount() {
        this.getTopBars();
    }

    componentDidUpdate(prevProps) {
        if(this.props.location !== prevProps.location) {
            this.getTopBars();
        }
    }

        
    render() {
        if(this.state.top_bars.length > 0) {
            const bars = this.state.top_bars.map( (bar) =>{
                return ( 
                    <div className='col-md-12' >
                    <Bar data={bar} key={bar.name}/>
                    </div>
                );
            });
            return (
                <div className='text-center'>
                <h3> Popular Near You </h3>
                <div className='row'>
                    {bars}
                </div>
                </div>
            )
        } else {
            return (
                <div className='text-center'>
                </div>
            )
        }
    }

   async getTopBars(){
       await Axios({
            method: 'post',
            url: '/api/localbars',
            data : {
                location : this.props.location
            }
        }).then ( res => {
            console.log(res.data);
            this.setState({
                top_bars : res.data
            });
        });
    }
}