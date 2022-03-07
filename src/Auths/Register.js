import React, { Component } from 'react';
import { Button, Card, CardFooter, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

export class Register extends Component {

  constructor() {
    super(); 
    this.state = {
      FirstName: '',
      LastName: '',
      Username: '',
      Email: '',
      Password: ''
    }

    this.FirstName = this.FirstName.bind(this);
    this.LastName = this.LastName.bind(this);
    this.Username = this.Username.bind(this);
    this.Email = this.Email.bind(this);
    this.Password = this.Password.bind(this);    
    this.register = this.register.bind(this);
  }

  FirstName(event) {
    this.setState({ FirstName: event.target.value })
  }

  LastName(event) {
    this.setState({ LastName: event.target.value })
  }

  Username(event) {
    this.setState({ Username: event.target.value })
  }

  Email(event) {
    this.setState({ Email: event.target.value })
  }

  Password(event) {
    this.setState({ Password: event.target.value })
  }

  register(event) {
        fetch('https://switchdockerapi.azurewebsites.net/api/auth/signup', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
   body: JSON.stringify({

    firstname: this.state.FirstName,
    lastname: this.state.LastName,
    username: this.state.Username,
    email: this.state.Email,
    password: this.state.Password 
 })

}).then((Response) => Response.json()) .then((Result) => {
 if (Result.Status == 'Success')
    this.props.history.push("/Dashboard");
    else
    alert('Sorrrrrry !!!! Un-authenticated User !!!!!')
    })
  }

  render() {
    return (
 <div className="app flex-row align-items-center">
 <Container>
        <Row className="justify-content-center">
                <Col md="9" lg="7" xl="6">
                    <Card className="mx-4">
                        <CardBody className="p-4">
                            <Form>
                            <div class="row" className="mb-2 pageheading">
                                 <div class="col-sm-12 btn btn-primary">Sign Up </div>
                            </div>

                    <InputGroup className="mb-3">
                        <Input type="text"  onChange={this.FirstName} placeholder="Enter Your FirstName" />
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <Input type="text"  onChange={this.LastName} placeholder="Enter Your Lastname" />
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <Input type="text"  onChange={this.Usernmae} placeholder="Enter Your username" />
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <Input type="text"  onChange={this.Email} placeholder="Enter Email" />
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <Input type="password"  onChange={this.Password} placeholder="Enter Password" />
                    </InputGroup>

                    <InputGroup className="mb-4">
                      <Input type="text"  onChange={this.City} placeholder="Enter City" />
                    </InputGroup>

                    <InputGroup className="mb-4">
                      <Input type="text"  onChange={this.Department} placeholder="Enter Department" />
                    </InputGroup>
                    <Button  onClick={this.register}  color="success" block>Registert</Button>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

    );

  }

}


export default Register;

