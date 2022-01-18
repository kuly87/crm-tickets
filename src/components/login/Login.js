import React, {useState} from 'react';
import propTypes from 'prop-types'
import {Container, Row, Col, Form, Button, Nav} from 'react-bootstrap'

function Login({handleChange,email,password, handleSubmit, formSwitcher}) {
  return (
      <Container>
          <Row>
              <Col>
                <h1 className='text-info text-center'>Client Login</h1>
                <hr/>
                <Form autoComplete='off' onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>
                            Email Address
                        </Form.Label>
                        <Form.Control
                        type='email'
                        name='email'
                        value={email}
                        onChange={handleChange}
                        placeholder='Please Enter Your Email'
                        required
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>
                            Password
                        </Form.Label>
                        <Form.Control
                        type='password'
                        name='password'
                        value={password}
                        onChange={handleChange}
                        placeholder='Please Enter Your Password'
                        required
                        />
                    </Form.Group>
                    <Button type='submit'>Login</Button>
                </Form>
                <hr/>
              </Col>
          </Row>
          <Row>
              <Col>
                <Nav className="me-auto">
                    <Nav.Link href="#!" onClick={() => formSwitcher('reset')}>Forget Password?</Nav.Link>
                </Nav>
              </Col>
          </Row>
      </Container>
  )
}

Form.propTypes = {
    handleChange: propTypes.func.isRequired,
    email: propTypes.string.isRequired,
    password: propTypes.string.isRequired,
    handleSubmit: propTypes.func.isRequired,
    formSwitcher: propTypes.func.isRequired
}




export default Login;
