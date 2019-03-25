import React, { Component } from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import PizzaContext from '../Pizza/context'

/*************
 * TODO: 
 * Fix styling
*************/

const Map = ReactMapboxGl({
  accessToken: process.env.REACT_APP_MAPBOX_KEY
});

class Mapbox extends Component {

  state = {
    long: this.props.long,
    lat: this.props.lat,
    zoom: 2,
    mapstyle: 'dark',
  };

 

  getPizzaPlacesFromHereAPI() {
    const here_api_url = "https://places.cit.api.here.com/places/v1/autosuggest?";
    const here_api_at = `at=${this.state.lat},${this.state.lng}&`;
    const here_api_q = "q=pizza&";
    const here_api_app_id = `app_id=${process.env.REACT_APP_HERE_API_APP_ID}&`;
    const here_api_app_code = `app_code=${process.env.REACT_APP_HERE_API_APP_CODE}`;

    //the built-in fetch API will make the REST/AJAX call for us: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch    
    fetch(here_api_url + here_api_at + here_api_q + here_api_app_id + here_api_app_code)
      .then((response) => {
        //call HERE API and get returned list
        return response.json();
      }
      )
      //filter down to response that have locations (lat/lon)
      .then((responseAsJson) => {

        //use the JavaScript filter method - https://www.w3schools.com/jsref/jsref_filter.asp
        const filtered = responseAsJson.results.filter((result) => {
          //this checks to see if this record has a position array
          return result.position;

        });

        //return the filtered results
        return filtered;

      })
      //receive the promise response returned as a JSON object
      .then((filtered) => {

        this.setState(() => {
          return {
            pizza_place_list: filtered,
          }
        }
        );

        return filtered;
      })
      .then((filtered) => {

        this.state.pizza_place_list.forEach((pizza_place) => {
          const pizzalocation = pizza_place.title + ' ' +
            pizza_place.vicinity + ' ' +
            pizza_place.category;

          console.log(pizzalocation);
        }
        );
        console.log(this.state.pizza_place_list[2].title);
      })
      .catch(error => console.error(error));
  }

  render() {
    //const { long, lat, zoom, mapstyle } = this.state;

    return (
      <div className="container">
        <div>{`Longitude: ${this.state.long} Latitude: ${this.state.lat} Zoom: ${this.state.zoom}`}</div>
        <Map style={`mapbox://styles/mapbox/${this.state.mapstyle}-v9`}
          center={[this.state.long, this.state.lat]}
          containerStyle={{
            height: "100%",
            width: "100%"
          }}>
          <Layer type="symbol"
            id="marker"
            layout={{ "icon-image": "marker-15" }}>
            <Feature coordinates={[this.state.long, this.state.lat]} />
          </Layer>
        </Map>
      </div>
    )

  }
}

const ContextMap = props => (
  <PizzaContext.Consumer>
    {({ context}) =>
      <Mapbox
        lat={context.lat}
        long={context.long} />}
  </PizzaContext.Consumer>
)

export default Mapbox;