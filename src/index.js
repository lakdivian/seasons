import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends Component {

    state = {
        lat: null,
        long: null,
        errorMessage: ''
    }

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({lat: position.coords.latitude,long: position.coords.longitude}),
            (error) => this.setState({errorMessage: error.message})
        )
    }

    renderContent(){
        if(this.state.errorMessage && (!this.state.lat || !this.state.long)){
            return <div>
                Error: { this.state.errorMessage }
            </div>
        }
        if(!this.state.errorMessage && (this.state.lat || this.state.long)){
            return <div>
                 <SeasonDisplay lat = { this.state.lat } />
            </div>
        }

        return <Spinner message="Please allow us to access the location"/>
    }

    render() {
        return(
        <React.Fragment>{ this.renderContent() }</React.Fragment>
        )
        
    }
}

export default App



ReactDOM.render(<App />, document.querySelector('#root'))