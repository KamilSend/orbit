import React, { Component } from 'react'
import { auth } from './services/firebase'

import './App.scss';

import Layout from './components/layout/layout'
import Authentication from './components/authentication/authentication'

class App extends Component {

    state={
        authenticated:false,
        userID:'',
    }


    componentDidMount() {

        auth().onAuthStateChanged((user) => {
            if (user) {
                // console.log(user.uid)
                this.setState({
                    authenticated: true,
                    userID:user.uid,
                });

            } else {
                this.setState({
                    authenticated: false,
                });
            }
            // console.log(this.state.authenticated)
        })
    }
    render() {
        return (
            <div className="App">
                {this.state.authenticated?<Layout/>:null}
                {this.state.authenticated?null:<Authentication/>}
            </div>
        );
    }
}

export default App;
