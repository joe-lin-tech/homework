import React from "react";
import {
    Jumbotron,
    Container,
    Button,
    InputGroup,
    FormControl,
    Row,
    Col,
    Accordion,
    Card
} from 'react-bootstrap';

function Teacher() {
    return (
        <div>
            <Jumbotron fluid>
                <Container>
                    <h1>Teacher</h1>
                    <p>
                        Submit your problems here.
                    </p>
                    <Button variant="primary">Sign In</Button>
                </Container>
            </Jumbotron>
            <Container>
                <Row>
                    <Col>1 of 2</Col>
                    <Col xs={4}>
                        <Accordion defaultActiveKey="0">
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                        Click me!
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>
                                    <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                            </InputGroup.Prepend>
                            <FormControl aria-label="Text input with checkbox" />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                            </InputGroup.Prepend>
                            <FormControl aria-label="Text input with checkbox" />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                            </InputGroup.Prepend>
                            <FormControl aria-label="Text input with checkbox" />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                            </InputGroup.Prepend>
                            <FormControl aria-label="Text input with checkbox" />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                            </InputGroup.Prepend>
                            <FormControl aria-label="Text input with checkbox" />
                        </InputGroup>
                                    </Card.Body>
                                    
                                </Accordion.Collapse>
                            </Card>
                            
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Teacher;