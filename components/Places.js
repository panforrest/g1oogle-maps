//NOT SURE WHY IT SHOULD BE props        // const list = this.state.venues.map((venue, i) => {
// <li key={i}>{venue.name}</li>	// <li key={venue.id}>{venue.name}</li>
import React, { Component } from 'react'

class Places extends Component {

    // componentDidMount(){
    // 	console.log('componentDidMount: ')
    // }

	render(){
        const list = this.props.venues.map((venue, i) => {
        	return (
        		<li key={i}>{venue.name}</li>
        	)
        })

		return(
			<div>
			    {list}
			</div>
		)
	}
}

export default Places