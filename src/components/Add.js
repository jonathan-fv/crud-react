import React, {useState} from 'react';
import {Button, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Users from './Users';
import{v4 as uuid} from 'uuid';
import {useNavigate} from 'react-router-dom';

function Add(){

    const [name, setName] = useState("")
    const [username, setUsername] = useState("")

    let history = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault()
        const ids = uuid()
        let uniqueId = ids.slice(0,8)
        let a = name,
        b = username
        Users.push({id: uniqueId, name: a, username: b})
        history("/")
    }

    return <div>
        <Form className='d-grid gap-2' style={{margin:"15rem"}}>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Control type="text" placeholder="Enter name" required onChange={(e) => setName(e.target.value)}></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formUsername">
                <Form.Control type="text" placeholder="Enter username" required onChange={(e) => setUsername(e.target.value)}></Form.Control>
            </Form.Group>
            <Button onClick={(e) => handleSubmit(e)} type="submit">Submit</Button>
        </Form>
    </div>
    
}

export default Add