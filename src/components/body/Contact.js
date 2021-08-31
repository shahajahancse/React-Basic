import React, { Component }  from 'react';
import { Button, FormGroup, Label, Col, Card, CardBody, CardHeader } from "reactstrap";
import { Form, Control, Errors, actions } from 'react-redux-form';
import { connect } from "react-redux";
import axios from 'axios';
import { baseUrl } from "../../redux/baseUrl";
import { Alert } from 'reactstrap';

const mapDispatchToProps = dispatch => {
    return {
        resetFeedbackForm: () => {
            dispatch(actions.reset('feedback'));
        }
    }
}

const required = val => val && val.length;
const isNumber = val => !isNaN(Number(val));
const validEmail = val => /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/i.test(val);

class Contact extends Component {
    state = {
        alertShow: false,
        alertText: null,
        alertType: null
    }

    handleSubmit = values => {
        // console.log(values);
        axios.post(baseUrl + 'feedback', values)
            .then(response => response.status)
            .then(status => {
                if (status === 201) {
                    this.setState({
                        alertShow: true,
                        alertText: 'Submitted successful',
                        alertType: "success"
                    });
                    setTimeout(() => {
                        this.setState({
                            alertShow: false
                        })
                    }, 2000);
                }
            })
            .catch(error => {
                this.setState({
                    alertShow: true,
                    alertText: error.message,
                    alertType: "danger"
                });
                setTimeout(() => {
                    this.setState({
                        alertShow: false
                    })
                }, 2000);
            })
        this.props.resetFeedbackForm();
    }

    render() {
        document.title='Contact';
        return (
            <div className="container">
                <div className="row row-content" style={{ paddingLeft: "20px",textAlign: "left" }} >
                    <div className="col-12 col-md-8 offset-md-2">
                        <Card>
                            <CardHeader>
                             <h3 className="text-center py-3">Send us your Feedback</h3>
                            </CardHeader>
                            <Alert isOpen = {this.state.alertShow} color={this.state.alertType} >{this.state.alertText}</Alert>
                            <CardBody>
                                <Form model="feedback" onSubmit={(values) => this.handleSubmit(values)}>
                                    <FormGroup row>
                                        <Label htmlFor="firstName" md={2}> First Name </Label>
                                        <Col md={10}>
                                            <Control.text
                                                model=".firstName"
                                                name="firstName"
                                                placeholder="First Name..."
                                                className="form-control"
                                                validators={{ required }}
                                            />
                                            <Errors
                                                className="text-danger"
                                                model=".firstName"
                                                show="touched"
                                                messages={
                                                    {
                                                        required: 'Required'
                                                    }
                                                }
                                            />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label htmlFor="lastName" md={2}> Last Name  </Label>
                                        <Col md={10}>
                                            <Control.text
                                                model=".lastName"
                                                name="lastName"
                                                className="form-control"
                                                placeholder="Last Name..."
                                                validators={{ required }}
                                            />
                                            <Errors
                                                className="text-danger"
                                                model=".lastName"
                                                show="touched"
                                                messages={
                                                    {
                                                        required: 'Required'
                                                    }
                                                }
                                            />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label htmlFor="telnum" md={2}> Contact  </Label>
                                        <Col md={10}>
                                            <Control.text
                                                model=".telnum"
                                                name="telnum"
                                                className="form-control"
                                                placeholder="Tel. Number..."
                                                validators={{
                                                    isNumber,
                                                    required
                                                }}
                                            />
                                            <Errors
                                                className="text-danger"
                                                model=".telnum"
                                                show="touched"
                                                messages={
                                                    {
                                                        required: 'Required, ',
                                                        isNumber: 'invalid number '
                                                    }
                                                }
                                            />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label htmlFor="email" md={2}> Email </Label>
                                        <Col md={10}>
                                            <Control.text
                                                model=".email"
                                                name="email"
                                                className="form-control"
                                                placeholder="Email..."
                                                validators={{
                                                    validEmail,
                                                    required
                                                }}
                                            />
                                            <Errors
                                                className="text-danger"
                                                model=".email"
                                                show="touched"
                                                messages={
                                                    {
                                                        required: 'Required,  ',
                                                        validEmail: 'invalid email '
                                                    }
                                                }
                                            />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md={{ size: 6, offset: 2 }}>
                                            <FormGroup check>
                                                <Label check>
                                                    <Control.checkbox
                                                        model=".agree"
                                                        className="form-check-input"
                                                        name="agree"
                                                    />
                                                    <strong>May we contact you?</strong>
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                        <Col md={{ size: 3, offset: 1 }}>
                                            <Control.select
                                                model=".contactType"
                                                className="form-control"
                                                name="contactType"
                                            >
                                                <option>Tel.</option>
                                                <option>Email</option>
                                            </Control.select>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup >
                                        <Label htmlFor="message"> Your Feedback </Label>
                                        <Control.textarea
                                            model=".message"
                                            name="message"
                                            className="form-control"
                                            rows="8"
                                            validators={{
                                                required
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".message"
                                            show="touched"
                                            messages={
                                                {
                                                    required: 'Required, ',
                                                }
                                            }
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Col md={{ size: 10, offset: 2 }}>
                                            <Button type="submit" color="primary">Send Feedback </Button>
                                        </Col>
                                    </FormGroup>
                                </Form>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(Contact);
