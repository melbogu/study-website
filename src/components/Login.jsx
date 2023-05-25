import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();

    function onLogin() {
        navigate('/dashboard', { replace: true });
    }

    return <div className="center">
        <h2>Login</h2>
        <Form className="login-form">
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={onLogin}>
                Login
            </Button>
            <Link className="link-padding" to="/signUp">New here? Sign up</Link>
        </Form>
    </div>;
}