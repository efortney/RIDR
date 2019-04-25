import React from 'react';

const bar = ({data}) => {

    const cardStyle = {
        height: '15%'
    }

    if(data.price == null ) {
        data.price = ' not listed '
    }

    return (
        <div className="card" style={cardStyle} >
            <img class="card-img-top"  src={data.image_url} alt={data.name}></img>
            <div className="card-body">
                <h5 className="card-title">{data.name}</h5>
                <p className="card-text"> Price:{data.price} Rating: {data.rating}</p>
            </div>
        </div>
    )
}

export default bar;