import {Row, Col, Form, Button} from "react-bootstrap"
import {useEffect, useState, useContext} from "react"
import { useNavigate } from 'react-router-dom'
import UserContext from './../UserContext'
import './Pages.css'

export default function Login(){

    const [email, setEmail] = useState("")
    const [pw, setPw] = useState("")
    const [isDisabled, setIsDisabled] = useState(true)

    // form button useEffect 
    useEffect(() => {
        if(email !== "" && pw !== "" ){
            setIsDisabled(false)
        } else {
            setIsDisabled(true)
        }
    }, [email, pw])

    // userContext
    // const {state, dispatch} = useContext(UserContext)
    const navigate = useNavigate()

    // login backend 
    const loginUser = async (e) => {
        e.preventDefault()
        // alert(`You have logged in!`)

        await fetch('http://localhost:3005/api/users/login', {
			method: "POST",
			headers:{
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				email: email,
				password: pw
			})
		})
        .then(response => response.json())
		.then(response => {
            console.log(response)
        
        })
    }


    return (
        <Row className="justify-content-center align-items-center m-3 p-3">
            <Col id="login-col"  xs={10} md={6} className="d-flex justify-content-center">
            <Form id="login-form" className="w-100" onSubmit={(e) => loginUser(e)}>
            <h3 className="text-center p-3">LOGIN</h3>
            <h6 className="text-center "><a href="/register">Don't have an account? Register here</a></h6>
            <Form.Group className="mb-3">
                <Form.Label>Email Address</Form.Label>
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
            <a id="reset" href="/resetpassword">Reset Password</a>
            <Button id="btn-login"
            type="submit"
            disabled = {isDisabled}
            className="mt-3 p-2 w-100">
            Login
            </Button>
        </Form>
            </Col>
        </Row>
    )
}