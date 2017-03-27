        // const mapContainer = <div style={{width:100%, height:100%}}></div>  //DON'T FORGET '', ''
        // import { googleMapLoader, googleMap, marker } from 'react-google-maps'  //DON'T FORGET UPPERCASE
import React, { Component } from 'react'
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps'

class Map extends Component {
	render(){
        const mapContainer = <div style={{width:'100%', height:'100%'}}></div>

		return(
			<GoogleMapLoader
			    containerElement = { mapContainer }
                googleMapElement = {
                    <GoogleMap
                    defaultZoom={15}
                    defaultCenter={this.props.center}
                    option={{streetViewControl: false, mapTypeControl: false}} >                    
                    </GoogleMap>
                }    
            />
		)
	}
}

export default Map