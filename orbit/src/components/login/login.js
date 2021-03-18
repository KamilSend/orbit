import React from 'react'

import { Button, Jumbotron, Form } from 'react-bootstrap';

import './login.scss'

const login = () =>{
    return(
        <div className="loginContainer">
            <Jumbotron className="loginJumbotron">
                <Form>
                    <Form.Group controlId="formEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password" />
                    </Form.Group>
                </Form>

                <Button>Sign in</Button>
                <Form.Text className="text-muted">
                    Or
                </Form.Text>
                <Button>Sign up</Button>

            </Jumbotron>
        </div>

    )
}

export default login