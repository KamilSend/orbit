import React, { Component } from "react";

import {Button, Jumbotron, Form, Nav} from 'react-bootstrap';
import {signin, signup} from "../../../helpers/auth";

import './login.scss'
import {Link} from "wouter";

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            email: "",
            password: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    async handleSubmit(event) {
        console.log('zalogowano')
        event.preventDefault();
        this.setState({ error: "" });
        try {
            await signin(this.state.email, this.state.password);
        } catch (error) {
            this.setState({ error: error.message });
        }
    }

    render(){
        return(
            <div className="loginContainer">
                <Jumbotron className="loginJumbotron">
                    <Form>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                placeholder="Email"
                                name="email"
                                type="email"
                                onChange={this.handleChange}
                                value={this.state.email}
                            />
                        </Form.Group>
                        <Form.Group controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                placeholder="Password"
                                name="password"
                                onChange={this.handleChange}
                                value={this.state.password}
                                type="password"
                            />
                        </Form.Group>
                    </Form>

                    <Button
                        type="submit"
                        onClick={this.handleSubmit.bind(this)}
                    >Sign in</Button>
                    {this.state.error ? (
                        <p>{this.state.error}</p>
                    ) : null}
                </Jumbotron>
            </div>
        )
    }

}

export default Login