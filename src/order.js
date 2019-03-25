import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import Map from './components/map'
import PizzaPlaces from './Order/PizzaPlaces'

//have to manually import images?
import cheese from './img/cheese.png'
import pepperoni from './img/pepperoni.png'
import supreme from './img/supreme.png'

class Order extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: 32,
            long: 33,
            pizza_place: '',
        }
    }
    componentWillMount() {
        this.setLocation();
    }
    handleSentRandomPlace(place) {
        this.setState({
            pizza_place: place,
        });
    }
    setLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                this.setState(() => {
                    return {
                        lat: position.coords.latitude,
                        long: position.coords.longitude
                    }
                }
                );
            });
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    }
    render() {
        const {lat, long} = this.state;
        return (
            <>
                <Map lat={lat}
                    long={long} />
                <PizzaPlaces coords={
                    {
                        lat: lat,
                        long: long,
                    }}
                    title="Nearby Pizza Locations"
                    sendRandomPlace={this.handleSentRandomPlace} />
            </>
        );
    }
}

export default Order; 