import {  Card } from "react-bootstrap";
import './Components.css'

export default function EventCard() {
    return (
        <div className="card-event">
        <Card style={{ width: '18rem' }}>
        <Card.Header>Event Date</Card.Header>
        <Card.Body>
            <Card.Title>Event Title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Event Date</Card.Subtitle>
            <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </Card.Text>
            <Card.Link href="#">View Event</Card.Link>
        </Card.Body>
        </Card>
        </div>
    )
}