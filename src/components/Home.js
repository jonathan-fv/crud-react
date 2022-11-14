import React from 'react';
import {Button, Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Users from './Users';
import {Link, useNavigate} from 'react-router-dom';

function Home(){

    let history = useNavigate()

    const handleDelete = (id) => {
        let index = Users.map(function(e){
            return e.id
        }).indexOf(id)

        Users.splice(index,1)
        history('/')
    }

    return(
        <>
        <div style={{margin:"10rem"}}>
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
                                        <Button onClick={() => alert(item.id)}>EDIT</Button>
                                        &nbsp;
                                        <Button onClick={() => handleDelete(item.id)}>DELETE</Button>
                                    </td>
                                </tr>
                            )
                        })
                        :
                        "No data available"
                    }
                </tbody>
            </Table>
        </div>
        </>
    )
}

export default Home