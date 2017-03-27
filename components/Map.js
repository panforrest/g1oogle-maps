        // const mapContainer = <div style={{width:100%, height:100%}}></div>  //DON'T FORGET '', ''
        // import { googleMapLoader, googleMap, marker } from 'react-google-maps'  //DON'T FORGET UPPERCASE
                            // marker = {{marker}}>  //SHOULD BE {{markers}}
                            // const Marker = {   //SHOULD BE marker
import React, { Component } from 'react'
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps'

class Map extends Component {
	render(){
        const mapContainer = <div style={{width:'100%', height:'100%'}}></div>

        const markers = this.props.markers.map((venue, i) => {     //WRONG TO USE HERE .marker 
        	const marker = {
        		position: {
        			lat: venue.location.lat,
        			lng: venue.location.lng
        		}
        	}
        	return <Marker key={i} {...marker} />
        })


		return(
			<GoogleMapLoader
			    containerElement = { mapContainer }
                googleMapElement = {
                    <GoogleMap
                    defaultZoom={15}
                    defaultCenter={this.props.center}
                    option={{streetViewControl: false, mapTypeControl: false}}> 
                    { markers }                   
                    </GoogleMap>
                }    
            />
		)
	}
}

export default Map