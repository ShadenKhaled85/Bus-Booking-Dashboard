import React from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import '../../style/ManageDestinations.css' ;


const ManageDestinations = () => {
return (
    <div className = 'manage-destinations p-5'>
        <div className = 'header d-flex justify-content-between mb-5'>
            <h3 className = 'text-center'> Manage Dests </h3>
            <Link to = {'add'} className = 'btn  btn-success'> Add new destination </Link>
        </div>

        <Alert variant= 'danger' className = 'p-2'>
            This is an alert 
        </Alert>

        <Alert variant= 'success' className = 'p-2'>
            This is an alert 
        </Alert>
        
        <Table striped bordered hover >
        <thead>
            <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Destination</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>Sharm elsheikh </td>
            </tr>
            <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>Dahab</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Hussein</td>
                <td>Wael</td>
                <td>North Coast</td>
                <td>
                    <Link to = {'5'} className = 'btn btn-sm btn-primary mx-2'> Update </Link>
                    <Link to = {'/5'}  className = 'btn btn-sm btn-info mx-2'> Show </Link>
                    <Link to = {'delete'} className = 'btn btn-sm btn-danger mx-2'> Delete </Link>
                </td>
            </tr>
            <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>Sharm elsheikh </td>
            </tr>
            <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>Dahab</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Hussein</td>
                <td>Wael</td>
                <td>North Coast</td>
                <td>
                    <Link to = {'5'} className = 'btn btn-sm btn-primary mx-2'> Update </Link>
                    <Link to = {'/5'}  className = 'btn btn-sm btn-info mx-2'> Show </Link>
                    <Link to = {'delete'} className = 'btn btn-sm btn-danger mx-2'> Delete </Link>
                </td>
            </tr>
        </tbody>
    </Table>

        
    </div>
)
}

export default ManageDestinations
