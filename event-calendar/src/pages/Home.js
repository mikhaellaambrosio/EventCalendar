import { Fragment } from "react";
import { Row, Col, Card, Button, ListGroup } from 'react-bootstrap'
import image2 from "./../images/image2.jpg"
import image3 from "./../images/image3.jpg"
import './Pages.css'

export default function Home() {
    return (
        <Fragment>
            <div id="home">
            <div className="section-top">
            <Row>
                <Col md={5}>
                <h2>Featured Event</h2>

                    <Row>
                    <Card className="card">
                    <Row>
                        <Col>
                            <Card.Img variant="top" className="image2 img-fluid" src={image2}/>
                        </Col>
                        <Col>
                            <Card.Body className="card-body">
                            <Card.Title>Card Title</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                        </Col>
                    </Row>
                    </Card>
                    </Row>
                    <Row>
                        <Card className="card-long mt-3">
                        <Card.Body className="card-body">
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </Row>
                </Col>

                <Col md={4}>
                <h2>Featured Event</h2>
                    <Card className="card">
                    <Card.Img variant="top" className="cardImg-rect img-fluid" src={image3}/>
                    <Card.Body className="card-body">
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button className="button-home">View Event</Button>
                    </Card.Body>
                    </Card>    
                </Col>

                <Col md={3}>
                <h2>Guests</h2>
                    <Card className="card">
                    <ListGroup variant="flush">
                        <ListGroup.Item className="listgroup-item ">John Doe</ListGroup.Item>
                        <ListGroup.Item className="listgroup-item">Adriana Smith</ListGroup.Item>
                        <ListGroup.Item className="listgroup-item">Eros Locke</ListGroup.Item>
                        <ListGroup.Item className="listgroup-item">Barbara Keith</ListGroup.Item>
                        <ListGroup.Item className="listgroup-item">Cassey Andrews</ListGroup.Item>
                        <ListGroup.Item className="listgroup-item">David Borne</ListGroup.Item>
                    </ListGroup>
                    </Card>
                </Col>
            </Row>
            </div>

            <div className="section-bottom">
            <Row>
                <Col>
                    <Row>
                        <h2>Events for this month</h2>
                        <Col>
                            <Card className="card">
                            <Card.Header>18</Card.Header>
                            <Card.Body className="card-body">
                                <Card.Title>Game Night</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button className="button-home">View Event</Button>
                            </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                        <Card className="card">
                            <Card.Header>24</Card.Header>
                            <Card.Body className="card-body">
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button className="button-home">View Event</Button>
                            </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                        <Card className="card">
                            <Card.Header>26</Card.Header>
                            <Card.Body className="card-body">
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button className="button-home">View Event</Button>
                            </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>

                <Col>
                <h2>Past Events</h2>
                    <Row>
                        <Card className="card-pastEvents">
                        <ListGroup variant="flush" className="past-events">
                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                        </ListGroup>
                        </Card>
                    </Row>
                    <Row>
                        <Card className="card-pastEvents">
                        <ListGroup variant="flush" className="past-events">
                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                        </ListGroup>
                        </Card>
                    </Row>
                    <Row>
                        <Card className="card-pastEvents">
                        <ListGroup variant="flush" className="past-events">
                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                        </ListGroup>
                        </Card>
                    </Row>
                    <Row>
                        <Card className="card-pastEvents">
                        <ListGroup variant="flush" className="past-events">
                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                        </ListGroup>
                        </Card>
                    </Row>
                </Col>
            </Row>
            </div>
            </div>
        </Fragment>
    ) 
}