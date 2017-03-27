// ReactDOM.render(<App />, document.getElementById('root'))  //HERE NEED TO TIE webpack.config.js
//<div style={{width:300 height:600 backgroudn:'red'}}>   //DON'T FORGET ,
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Map from '../components/Map'
import Places from '../components/Places'

class App extends Component {
	render(){
		return (
			<div>
			    This is react app!
			    <div style={{width:300, height:600, background:'red'}}>
			        <Map />
			    </div>    
			    <Places />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'))