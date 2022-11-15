import React from 'react';
import {Button, Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Users from './Users';
import {Link, useNavigate} from 'react-router-dom';
import { PencilFill, Trash3Fill, PersonPlus} from 'react-bootstrap-icons';

function Home(){

    let history = useNavigate()

    const handleEdit = (id, name, username) =>{
        localStorage.setItem('id', id)
        localStorage.setItem('name', name)
        localStorage.setItem('username', username)
    }

    const handleDelete = (id) => {
        let index = Users.map(function(e){
            return e.id
        }).indexOf(id)

        Users.splice(index,1)
        history('/')
    }

    return(
        <>
        <div style={{margin:"5rem"}}>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Users && Users.length > 0
                        ?
                        Users.map((item) =>{
                            return (
                                <tr>
                                    <td>{item.name}</td>
                                    <td>{item.username}</td>
                                    <td>
                                        <Link to={`/edit`}>
                                            <Button style={{backgroundColor:'orange', border:'none'}} onClick={() => handleEdit(item.id, item.name, item.username)}><PencilFill/></Button>
                                        </Link>
                                        &nbsp;
                                        <Button style={{backgroundColor:'red', border:'none'}} onClick={() => handleDelete(item.id)}><Trash3Fill/></Button>
                                    </td>
                                </tr>
                            )
                        })
                        :
                        "No data available"
                    }
                </tbody>
            </Table>
            <br></br>
            <Link className='d-grid gap-2' to='/create'>
                <Button size='lg'><PersonPlus size={50} /></Button>
            </Link>
        </div>
        </>
    )
}

export default Home