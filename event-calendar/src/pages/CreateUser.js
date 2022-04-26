import {Form, Button, Container, Row, Col} from 'react-bootstrap'
import {useEffect, useState} from "react"
import {useNavigate} from "react-router-dom"

export default function CreateUser() {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [pw, setPw] = useState("")
    const [cpw, setCpw] = useState("")
    const [isDisabled, setIsDisabled] = useState(true)

    const navigate = useNavigate();

    useEffect(() => {
        if((firstName !== "" && lastName !== "" && email !== "" && pw !== "" && cpw !== "") && (pw === cpw)){
            setIsDisabled(false)
        } else {
            setIsDisabled(true)
        }
    }, [firstName, lastName, email, pw, cpw])

    const registerUser = (e) => {
        e.preventDefault()

        // alert(`You have successfully created an account!`)
        fetch('http://localhost:3005/api/users//register', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: pw,
            confirmPw: cpw
        })
        })
        .then(response => response.json())
        .then(response => {
            if(response){
                alert(`Registration Successful!`)

                navigate('/login')
            }
        })
    }

    return (
        <div className='form-createUser'>
        <Container fluid id="register-form" className="m-0 mt-3">
            <Row className="justify-content-center m-0">
            <Col  xs={10} md={6}>
                    <Form onSubmit={(e) => registerUser(e)}>
                        <h3 className="text-center p-3">CREATE AN ACCOUNT </h3>
                        <Form.Group className="mb-3">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control 
                                type="text" 
                                value={firstName} 
                                onChange = {(e) => setFirstName(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control 
                                type="text" 
                                value={lastName} 
                                onChange = {(e) => setLastName(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control 
                                type="email" 
                                value={email} 
                                onChange = {(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                                type="password" 
                                value={pw}
                                onChange = {(e) => setPw(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control 
                                type="password" 
                                value={cpw} 
                                onChange = {(e) => setCpw(e.target.value)}
                            />
                        </Form.Group>
                        <div >
                        <Button id="button-register"
                            className="w-100 mb-3"
                            type="submit"
                            disabled = {isDisabled}
                        >
                            Submit
                        </Button>
                        </div>
                    </Form>
            </Col>
        </Row>
        </Container>
        </div>
    )
}