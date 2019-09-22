import React from "react";
import {
    Jumbotron,
    Container,
    Button
} from "react-bootstrap";

function Home() {
    return (
        <div>
            <Jumbotron fluid>
                <Container>
                    <h1>Home Page</h1>
                    <p>
                        Subtitle
                    </p>
                    <Button variant="primary">Learn more</Button>
                </Container>
            </Jumbotron>
        </div>
    );
}

export default Home;