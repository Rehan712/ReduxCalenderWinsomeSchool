import React from 'react';
import {connect} from 'react-redux'
import Content from './Content';
import {arrowLeftAction,arrowRightAction} from '../actions'

class App extends React.Component {
	constructor(){
		super();
	}
	render(){
		return (
			<div className="app">
			<Content
			 {...this.props}
			 />	
			</div>
		)
	}
} 

function mapStateToProps({event}){
		return {
			event
		}	
	}
export default connect(mapStateToProps,{arrowRightAction,arrowLeftAction})(App)