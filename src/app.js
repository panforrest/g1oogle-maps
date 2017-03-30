// ReactDOM.render(<App />, document.getElementById('root'))  //HERE NEED TO TIE webpack.config.js
//<div style={{width:300 height:600 backgroudn:'red'}}>   //DON'T FORGET ,
// MOST IMPORTANT THING TO LEARN IN THIS DEMO 			    <Places venues={this.state.venues} />
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Map from '../components/Map'
import Places from '../components/Places'
import superagent from 'superagent' 

class App extends Component {

    constructor(){
    	super()
    	this.state = {
    		venues: []   //venues: null
    	}
    }

    componentDidMount(){
    	console.log('componentDidMount: ')

        const url = 'https://api.foursquare.com/v2/venues/search?v=20140806&ll=40.7575285,-73.9884469&client_id=VZZ1EUDOT0JYITGFDKVVMCLYHB3NURAYK3OHB5SK5N453NFD&client_secret=UAA15MIFIWVKZQRH22KPSYVWREIF2EMMH0GQ0ZKIQZC322NZ'

        superagent
        .get(url)
        .query(null)
        .set('Accept', 'text/json')   //NOT WHY NOT .set('Accept', 'application/json') 
        .end((err, response) => {

            const venues = response.body.response.venues   //const venue = resonse.body.response.venue
        	console.log(JSON.stringify(venues))

        	this.setState({
        		venues: venues
        	})
        })
    }


	render(){
        const location = {
        	lat: 40.7575285,
        	lng: -73.9884469
        }

        const markers = [      //BUT WHY IS WRONG const markers = {
        	{
        		location:{
		            lat: 40.7575285,
		        	lng: -73.9884469        			
        		}       	
            }
        ]

		return (
			<div>
			    <div style={{width:300, height:600, background:'red'}}>
			        <Map center={location} markers={this.state.venues} />
			    </div>    
			    <Places venues={this.state.venues} />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'))