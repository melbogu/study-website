import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { useImmer } from 'use-immer';
import Header from '../components/Header';

export default function SignUp() {
    const [newUser, updateNewUser] = useImmer({
        firstName: "",
        lastName: "",
        nickName: "",
        emailAddress: "",
        password: "",
        repeatedPassword: "",
        isPasswordValid: true
    });

    function onSubmit() {
        alert("New User was created! (tbd)");
    }

    function handleFirstNameChange(e) {
        updateNewUser(draft => {
            draft.firstName = e.target.value;
        });
    }

    function handleLastNameChange(e) {
        updateNewUser(draft => {
            draft.lastName = e.target.value;
        });
    }

    function handleNicknameChange(e) {
        updateNewUser(draft => {
            draft.nickName = e.target.value;
        });
    }

    function handleEmailChange(e) {
        updateNewUser(draft => {
            draft.emailAddress = e.target.value;
        });
    }

    function handlePasswordChange(e) {
        updateNewUser(draft => {
            draft.password = e.target.value;
        });
    }

    function handleRepeatedPasswordChange(e) {
        updateNewUser(draft => {
            draft.repeatedPassword = e.target.value;
            draft.isPasswordValid = draft.password === e.target.value;
        });
    }

    function passwordValidation(isValid) {
        return isValid ? "" : "is-invalid";
    }

    return (
        <div>
            <Header />
            <div className="center">
                <h2>Sign up</h2>
                <div>Get access to multiple fantastic quizzes to make you an expert on any topic!</div>
                <hr></hr>
                <Form className="sign-up-form">
                    <Form.Group className="mb-3" controlId="formFirstName">
                        <Form.Label>First name</Form.Label>
                        <Form.Control value={newUser.firstName} type="text" placeholder="Enter your first name" onChange={handleFirstNameChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formLastName">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control value={newUser.lastName} type="text" placeholder="Enter your last name" onChange={handleLastNameChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formNickname">
                        <Form.Label>Nickname</Form.Label>
                        <Form.Control value={newUser.nickName} type="text" placeholder="Choose a nickname" onChange={handleNicknameChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control value={newUser.emailAddress} type="email" placeholder="Enter email" onChange={handleEmailChange} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control value={newUser.password} type="password" placeholder="Password" onChange={handlePasswordChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPasswordSecond">
                        <Form.Label>Repeat your password</Form.Label>
                        <Form.Control className={`form-control ${passwordValidation(newUser.isPasswordValid)}`} value={newUser.repeatedPassword} type="password" placeholder="Password" onChange={handleRepeatedPasswordChange} />
                        <div id="validationServer03Feedback" className="invalid-feedback">
                            The given passwords don't match
                        </div>
                    </Form.Group>
                    <Button className="button" type="submit" onClick={onSubmit}>
                        Submit
                    </Button>
                    <Link className="link-padding" to="/">Back to login</Link>
                </Form>
            </div>
        </div>
    );

}
