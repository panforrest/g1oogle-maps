// ReactDOM.render(<App />, document.getElementById('root'))  //HERE NEED TO TIE webpack.config.js
//<div style={{width:300 height:600 backgroudn:'red'}}>   //DON'T FORGET ,
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Map from '../components/Map'
import Places from '../components/Places'
// import 

class App extends Component {
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
			        <Map center={location} />
			    </div>    
			    <Places />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'))