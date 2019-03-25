import React from 'react';
import PizzaConsumer from './context'
import { firebaseWrapper } from '../firebase/context';

const locationProvider = Component => {
    class LocationProvider extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                lat: 35.2220,
                long: 101.8313,
            }
        }
        componentWillMount() {
            this.setLocation();
        }
        //
        setLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(position => {
                    this.setState(() => {
                        return {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude
                        }
                    }
                    );
                });
            } else {
                console.log("Geolocation is not supported by this browser.");
            }
        }

        render() {
            return (
                <PizzaConsumer.Provider value ={this.state}>
                    <Component {...this.props} />
                </PizzaConsumer.Provider>
            )
        }

    }
    return firebaseWrapper(LocationProvider);
}
export default locationProvider;