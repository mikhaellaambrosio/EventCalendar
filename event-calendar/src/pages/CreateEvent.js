import {Form, Button} from 'react-bootstrap'

export default function CreateEvent() {

    return (
        <div className='form-createEvent'>
        <Form>
            <h1>Create Event</h1>
            <Form.Group className="mb-3" controlId="formBasicEventTitle">
                <Form.Label>Event Title</Form.Label>
                <Form.Control type="text" placeholder="Enter Event Title" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEventDate">
                <Form.Label>Event Date</Form.Label>
                <Form.Control type="text" placeholder="Enter Event Date" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasiLocation">
                <Form.Label>Event Location</Form.Label>
                <Form.Control type="text" placeholder="Enter Event Location" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasiDescription">
                <Form.Label>Event Description</Form.Label>
                <Form.Control type="textarea" rows={3} placeholder="Enter Event Decription" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicGuest">
                <Form.Label>Event Guests</Form.Label>
                <Form.Control type="email" placeholder="Add Guests" />
            </Form.Group>
        <Button variant="primary" type="submit">
            Save
        </Button>
        </Form>
        </div>
    )
}