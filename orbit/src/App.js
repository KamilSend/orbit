import React, { Component } from 'react'
import axios from './axios'
import { auth } from './services/firebase'
import { signout } from './helpers/auth'

import './App.scss';

import Layout from './components/layout/layout'
import Authentication from './components/authentication/authentication'
import Login from './components/authentication/login/login'
import Signup from './components/authentication/signup/signup'

class App extends Component {

    state={
        authenticated:false,
        userID:'',
    }

    componentDidMount() {

        auth().onAuthStateChanged((user) => {
            if (user) {
                console.log(user.uid)
                this.setState({
                    authenticated: true,
                    userID:user.uid,
                });

            } else {
                this.setState({
                    authenticated: false,
                });
            }
            console.log(this.state.authenticated)

        })
    }

    render() {
        return (
            <div className="App">
                {this.state.authenticated?<Layout/>:null}
                {this.state.authenticated?null:<Authentication/>}
                {/*{this.state.authenticated?null:<Login/>}*/}
                {/*{this.state.authenticated?null:'or'}*/}
                {/*{this.state.authenticated?null:<Signup/>}*/}
            </div>
        );
    }
}

export default App;
