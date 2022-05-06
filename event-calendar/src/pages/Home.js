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
            <Row className="justify-content-center">
                <div className="group-header">
                    <h2 className="m-0">Month of July</h2>
                </div>
                <Col xs={12} md={6} className="m-2">
                    <Row>
                    <Card className="card">
                    <Row>
                        <Col sm={12} className="order-first">
                            <Card.Img variant="top" className="image2 img-fluid" src={image2}/>
                        </Col>
                        <Col sm={12} className="order-last">
                            <Card.Body className="card-body">
                            <Card.Title>Year 2022</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <div className="d-flex justify-content-center align-items-center">
                            <Card.Link href="/allEvents">
                                <Button className="button-tertiary">Events</Button>
                            </Card.Link>
                            <Card.Link href="/allUsers">
                                <Button className="button-tertiary">Users</Button>
                            </Card.Link>
                            </div>
                            </Card.Body>
                        </Col>
                    </Row>
                    </Card>
                    </Row>
                </Col>
                <Col className="m-2">
                    <Row className="align-items-center">
                        <Card className="card-long">
                        <Card.Body className="card-body">
                            <Card.Title>Event Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content. 
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </Row>

                    <Row>
                    <div className="group-header">
                    <h2 className="m-0">Featured Event</h2>
                    </div>
                    <Col className="p-0">
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
                    </Row>
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
                                <Button className="button-home" onClick={handleShow}>View Event</Button>
                            </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={10} s={8} md={4} className="mb-3">
                        <Card className="card">
                            <Card.Header className="header-pastEvents">24</Card.Header>
                            <Card.Body className="card-body">
                                <Card.Title>Event Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button className="button-home" onClick={handleShow}>View Event</Button>
                            </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={10} s={8} md={4} className="mb-3">
                        <Card className="card">
                            <Card.Header className="header-pastEvents">26</Card.Header>
                            <Card.Body className="card-body">
                                <Card.Title>Event Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button className="button-home" onClick={handleShow}>View Event</Button>
                            </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>

                <div className="group-header">
                    <h2 className="m-0">Past Events</h2>
                </div>
                <Col xs={12}>
                    <Row>
                        <Card className="card-pastEvents">
                        <ListGroup variant="flush" className="past-events">
                            <ListGroup.Item>
                                <Row className="align-items-center justify-content-center">
                                    <Col xs={5}>
                                        AWS Workshop
                                    </Col>
                                    <Col xs={6} sm={3}  className="text-center">
                                        January 5, 2022
                                    </Col>
                                    <Col sm={3} className="attendees text-center">
                                        15 Attendees
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        </ListGroup>
                        </Card>
                    </Row>
                    <Row>
                        <Card className="card-pastEvents">
                        <ListGroup variant="flush" className="past-events">
                        <ListGroup.Item>
                                <Row className="align-items-center justify-content-center">
                                    <Col xs={5}>
                                        Book Fair
                                    </Col>
                                    <Col xs={6} sm={3}  className="text-center">
                                        February 22, 2022
                                    </Col>
                                    <Col sm={3} className="attendees text-center">
                                        28 Attendees
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        </ListGroup>
                        </Card>
                    </Row>
                    <Row>
                        <Card className="card-pastEvents">
                        <ListGroup variant="flush" className="past-events">
                        <ListGroup.Item>
                                <Row className="align-items-center justify-content-center">
                                    <Col xs={5}>
                                        Safety Orientation
                                    </Col>
                                    <Col xs={6} sm={3}  className="text-center">
                                        March 12, 2022
                                    </Col>
                                    <Col sm={3} className="attendees text-center">
                                        46 Attendees
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        </ListGroup>
                        </Card>
                    </Row>
                    <Row>
                        <Card className="card-pastEvents">
                        <ListGroup variant="flush" className="past-events">
                        <ListGroup.Item>
                                <Row className="align-items-center justify-content-center">
                                    <Col xs={5}>
                                        Fitness Check
                                    </Col>
                                    <Col xs={6} sm={3}  className="text-center">
                                        April 3, 2022
                                    </Col>
                                    <Col sm={3} className="attendees text-center">
                                        52 Attendees
                                    </Col>
                                </Row>
                            </ListGroup.Item>
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
                <Modal.Title>Event Title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row className="p-3">
                        <Col xs={12} md={6} className="py-2 d-flex justify-content-center">
                            <Row className="align-items-center">
                                <Col xs={2} className="px-2">
                                    <img src={clock} className="modal-icon" />
                                </Col>
                                <Col xs={10} className="px-2" className="modal-dateTime">
                                    Event Date
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12} md={6} className="py-2 d-flex justify-content-center">
                            <Row className="align-items-center">
                                <Col xs={2}  className="px-2">
                                    <img src={calendar} className="modal-icon" />
                                </Col>
                                <Col xs={10} className="modal-dateTime">
                                    Event Time
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