import React, {useState, useEffect} from 'react';
import {Button, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Users from './Users';
import {useNavigate} from 'react-router-dom';


function Edit(){
    
    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [id, setId] = useState("")

    let history= useNavigate()
    
    let index = Users.map(function(e){
        return e.id
    }).indexOf(id)

    const handleSubmit = (e) =>{
        e.preventDefault()
        let a = Users[index]
        a.name = name
        a.username = username

        history("/")
    }

    useEffect(() => {
        setName(localStorage.getItem("name"))
        setUsername(localStorage.getItem("username"))
        setId(localStorage.getItem("id"))
    }, [])

    return (
        <div>
            <Form className='d-grid gap-2' style={{margin:"15rem"}}>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Control type="text" placeholder="Enter name" value={name} required onChange={(e) => setName(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formUsername">
                    <Form.Control type="text" placeholder="Enter username" value={username} required onChange={(e) => setUsername(e.target.value)}></Form.Control>
                </Form.Group>
                <Button onClick={(e) => handleSubmit(e)} type="submit">Update</Button>
            </Form>
        </div>
    )
}

export default Edit