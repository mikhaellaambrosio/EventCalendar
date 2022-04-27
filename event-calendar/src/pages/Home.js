import { Fragment, useState } from "react";
import { Row, Col, Card, Button, ListGroup, Modal, Stack } from 'react-bootstrap'
import image2 from "./../images/image2.jpg"
import image3 from "./../images/image3.jpg"
import clock from "./../images/clock.png"
import calendar from "./../images/calendar.png"

import './Pages.css'

export default function Home() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Fragment>
            <div id="home">
            <div className="section-top">
            <Row>
                <div className="group-header">
                    <h2 className="m-0">Featured Event</h2>
                </div>
                <Col md={5}>
                    <Row>
                    <Card className="card">
                    <Row>
                        <Col sm={12} className="order-first">
                            {/* <Card.Img variant="top" className="image2 img-fluid" src={image2}/> */}
                        </Col>
                        <Col sm={12} className="order-last">
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
                <div className="group-header">
                    <h2 className="m-0">Featured Event</h2>
                </div>
                <Col md={4}>
                    <Card className="card">
                    {/* <Card.Img variant="top" className="cardImg-rect img-fluid" src={image3}/> */}
                    <Card.Body className="card-body">
                        <Card.Title>Steak Night</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button className="button-home" onClick={handleShow}>View Event</Button>
                    </Card.Body>
                    </Card>    
                </Col>

                <div className="group-header">
                    <h2 className="m-0">Guests</h2>
                </div>
                <Col md={3}>
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
                <div className="group-header">
                    <h2 className="m-0">Events for this month</h2>
                </div>
                <Col xs={12}>
                    <Row className="justify-content-center align-items-center">
                        <Col xs={10} s={8} md={4} className="mb-3">
                            <Card className="card">
                            <Card.Header className="header-pastEvents">18</Card.Header>
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
                        <Col xs={10} s={8} md={4} className="mb-3">
                        <Card className="card">
                            <Card.Header className="header-pastEvents">24</Card.Header>
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
                        <Col xs={10} s={8} md={4} className="mb-3">
                        <Card className="card">
                            <Card.Header className="header-pastEvents">26</Card.Header>
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

                <Col xs={12}>
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

            <div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Steak Night</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row className="p-3">
                        <Col xs={12} md={6} className="py-2 d-flex justify-content-center">
                            <Row className="align-items-center">
                                <Col xs={2} className="px-2">
                                    <img src={clock} className="modal-icon" />
                                </Col>
                                <Col xs={10} className="px-2" className="modal-dateTime">
                                    July 1, 2022
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12} md={6} className="py-2 d-flex justify-content-center">
                            <Row className="align-items-center">
                                <Col xs={2}  className="px-2">
                                    <img src={calendar} className="modal-icon" />
                                </Col>
                                <Col xs={10} className="modal-dateTime">
                                    6PM - 8PM
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="p-3">
                        <p>
                            A short description about the event stating its purpose and goal for the event.
                        </p>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Stack direction="horizontal" gap={3}>
                        <Button className="buttonModal-home" onClick={handleClose} >
                        Update
                        </Button>
                        <Button className="buttonModal-home" onClick={handleClose} >
                        Delete
                        </Button>
                    </Stack>
                </Modal.Footer>
            </Modal>
            </div>
        </Fragment>
    ) 
}