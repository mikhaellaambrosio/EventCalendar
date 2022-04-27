import {Form, Button, Col, Row} from 'react-bootstrap'
import { useState, useEffect } from "react";
import { useNavigate} from "react-router-dom";


export default function CreateEvent() {

    const [eventTitle, setEventTitle] = useState(``);
    const [eventDate, setEventDate] = useState(``);
    const [eventTime, setEventTime] = useState(``);
    const [eventLocation, setEventLocation] = useState(``);
    const [eventDescription, setEventDescription] = useState(``);
    const [guests, setGuests] = useState(``);
    const [isDisabled, setIsDisabled] = useState(true);

    const navigate = useNavigate()

    useEffect(() => {
        if((eventTitle !== "" && eventDate !== "" && eventTime !== "" && eventLocation !== "" && eventDescription !== "" && guests !== "")){
            setIsDisabled(false)
        } else {
            setIsDisabled(true)
        }
    }, [eventTitle, eventDate, eventTime, eventLocation, eventDescription, guests])

    const handleSubmit = async (e) => {

        await fetch('http://localhost:3005/api/users/createEvent', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            eventTitle: eventTitle,
            eventDate: eventDate,
            eventTime: eventTime,
            eventLocation: eventLocation,
            eventDescription: eventDescription,
            guests: guests
          }),
        })
          .then((response) => response.json())
          .then((response) => {
            if (response) {
              alert(`You've succesfully added a new event!`);
    
              navigate(`/allEvents`);
            }
          });
      };



    return (
        <div className='form-createEvent'>
        <Row className="justify-content-center" >
        <Col  xs={12} md={10}>
        <Form id="form-createEvent" className="w-100" onSubmit={(e) => handleSubmit(e)} >
            <h1 className='page-heading'>Create Event</h1>
            <Form.Group className="mb-3" controlId="formBasicEventTitle">
                <Form.Label>Event Title</Form.Label>
                <Form.Control type="text" placeholder="Enter Event Title" value={eventTitle} onChange={(e) => setEventTitle(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEventDate">
                <Form.Label>Event Date</Form.Label>
                <Form.Control type="text" placeholder="Enter Event Date" value={eventDate} onChange={(e) => setEventDate(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEventDate">
                <Form.Label>Event Time</Form.Label>
                <Form.Control type="number" placeholder="Enter Event Date" value={eventTime} onChange={(e) => setEventTime(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasiLocation">
                <Form.Label>Event Location</Form.Label>
                <Form.Control type="text" placeholder="Enter Event Location" value={eventLocation} onChange={(e) => setEventLocation(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasiDescription">
                <Form.Label>Event Description</Form.Label>
                <Form.Control type="textarea" rows={3} placeholder="Enter Event Decription" value={eventDescription} onChange={(e) => setEventDescription(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicGuest">
                <Form.Label>Event Guests</Form.Label>
                <Form.Control type="email" placeholder="Add Guests" value={guests} onChange={(e) => setGuests(e.target.value)} />
            </Form.Group>
            <Button type="submit" className='button-create'>
            Save
            </Button>
        </Form>
        </Col>
        </Row>
        
        
        </div>
    )
}