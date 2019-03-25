import React from 'react';
import PizzaContext from './context'
import { firebaseWrapper } from '../firebase/context';

const locationProvider = Component => {
    class LocationProvider extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                lat: 35.2220,
                long: 101.8313,
                updateLocation: updatedLocation =>
                this.updateLocation(updatedLocation)
            }
        }

        updateLocation = updatedLocation => {
            this.setState(prevState => ({
                ...prevState,
                ...updatedLocation
            }))
        }        

        render() {
            return (
                <PizzaContext.Provider value ={this.state}>
                   <Component  />
                </PizzaContext.Provider>
            )
        }

    }
    return firebaseWrapper(LocationProvider);
}
export default locationProvider;