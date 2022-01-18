import React, {useState} from 'react';
import propTypes from 'prop-types'
import {Container, Row, Col, Form, Button, Nav} from 'react-bootstrap'

function Forget({handleChange,email,password, handleResetSubmit, formSwitcher}) {
  return (
      <Container>
          <Row>
              <Col>
                <h1 className='text-info text-center'>Reset Password</h1>
                <hr/>
                <Form autoComplete='off' onSubmit={handleResetSubmit}>
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
                   
                    <Button type='submit'>Reset Password</Button>
                </Form>
                <hr/>
              </Col>
          </Row>
          <Row>
              <Col>
                <Nav className="me-auto">
                    <Nav.Link href="#!" onClick={() => formSwitcher('login')}>Log In now</Nav.Link>
                </Nav>
              </Col>
          </Row>
      </Container>
  )
}

Form.propTypes = {
    handleChange: propTypes.func.isRequired,
    email: propTypes.string.isRequired,
    handleResetSubmit: propTypes.func.isRequired,
    formSwitcher: propTypes.func.isRequired,
}




export default Forget;
