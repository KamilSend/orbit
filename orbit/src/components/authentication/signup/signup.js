import React, { Component } from 'react';
import { signup } from '../../../helpers/auth'

import { Button, Jumbotron, Form } from 'react-bootstrap';

import '../login/login.scss'

class Signup extends Component{

    state = {
        error: null,
        email: '',
        password: '',
    };

    handleChange(event) {

        this.setState({
            [event.target.name]: event.target.value
        });
    }

    async handleSubmit(event) {
        console.log('submit')
        event.preventDefault();
        this.setState({ error: '' });
        try {
            await signup(this.state.email, this.state.password);
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
                                type="email"
                                name="email"
                                onChange={this.handleChange.bind(this)}
                                value={this.state.email}
                                placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                onChange={this.handleChange.bind(this)}
                                value={this.state.password}
                                placeholder="Enter password" />
                        </Form.Group>
                    </Form>
                    <Button
                        type="submit"
                        onClick={this.handleSubmit.bind(this)}
                    >Sign up</Button>
                    {this.state.error ? (
                        <p>{this.state.error}</p>
                    ) : null}
                </Jumbotron>
            </div>

        )
    }

}

export default Signup