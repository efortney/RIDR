import React, { Component } from 'react'
import './Map.css'

class Map extends Component {

    componentDidMount() {
        this.renderMap()
    }

    renderMap = () => {
        loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyC6UtxcZVztpcSZGOrCtAWfHSCN6PzJtL4&callback=initMap")
        window.initMap = this.initMap
    }



    initMap = () => {
        var directionsService = new google.maps.DirectionsService();
        var directionsDisplay = new google.maps.DirectionsRenderer();
        var chicago = new google.maps.LatLng(41.850033, -87.6500523);
        var kc = new google.maps.LatLng(39.301361, -94277525)
        var mapOptions = {
            zoom: 7,
            center: chicago
        }
        var map = new window.google.maps.Map(document.getElementById('map'), mpaOptions)
        var request = {
            origin: chicago,
            destination: kc,
            travelMode: 'DRIVING'
        };
        directionsService.route(request, function(result, status) {
            if (status == 'OK') {
                directionsDisplay.setDirections(result);
            }
        });
    }





    render() {
        return (
            <main>
                <div id="map"></div>
            </main>
        )
    }
}

function loadScript(url) {
    var index  = window.document.getElementsByTagName("script")[0]
    var script = window.document.createElement("script")
    script.src = url
    script.async = true
    script.defer = true
    index.parentNode.insertBefore(script, index)
}

export default Map;