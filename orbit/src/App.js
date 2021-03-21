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
