import React from 'react';
import {Button, Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Users from './Users';

function Home(){
    return(
        <>
        <div style={{margin:"10rem"}}>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
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