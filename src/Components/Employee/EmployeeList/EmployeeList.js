import React, {useEffect, useState} from 'react'
import {Table, Spinner, Button} from 'react-bootstrap';
import EmployeeForm from '../EmployeeForm/EmployeeForm';
// import Cookies from 'js-cookie';
import UpdateEmployee from '../UpdateEmployee/UpdateEmployee';


function EmployeeList() {
    const [users, setUsers] = useState([]);
    const [isBusy, setBusy] = useState(true);
    const [edit, setEdit] = useState(false);
    const [updatedUser, setUpdatedUser] = useState({});
    async function updateUser(e){
        e.preventDefault();
        const userId = e.target.getAttribute('id');
        setUpdatedUser(users.filter(user => user.id==userId)[0]);
        setEdit(true);
    }
    async function deleteUser(e){
        e.preventDefault();
        const userId = e.target.getAttribute('id');
        const deletedUser = await fetch(`http://localhost:5000/api/users/${userId}`, {
            method: 'DELETE',
            headers:{
                'authorization': `Bearer ${JSON.parse(sessionStorage.getItem('auth-token'))?.token}`,
            }
        });
        getUser().then(data=>{
            setUsers(data);
        });
    }
    async function getUser(){
        return fetch('http://localhost:5000/api/users',{
            method:'GET',
            headers:{
                'authorization': `Bearer ${JSON.parse(sessionStorage.getItem('auth-token'))?.token}`,
            }
        })
        .then(data=>data.json());
    }
    useEffect(() => {
        getUser()
        .then(data=>{
            setUsers(data);
            setBusy(false);
        })
    }, []);
    if(edit){
        return(<UpdateEmployee user={updatedUser} setEdit={setEdit}/>)
    }
    if(!isBusy){
        return (
        <div>
            <h2>Employee List</h2>
            <Table striped bordered hover>
        <thead>
            <tr>
                <th>Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Gender</th>
                <th>Salary</th>
                <th>Phone</th>
                <th>Email</th>
                <th>DOB</th>
                <th>Role</th>
                <th>Department</th>
                <th>DOJ</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            {users.map(user=>{
                console.log(user)
                return(
                    <tr key={`${user.id}`}>
                        <td>{user.id}</td>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.gender}</td>
                        <td>{user.salary}</td>
                        <td>{user.phone}</td>
                        <td>{user.email}</td>
                        <td>{user.DOB}</td>
                        <td>{user.role}</td>
                        <td>{user.department}</td>
                        <td>{user.DOJ}</td>
                        <td><Button id={`${user.id}`} variant="primary" onClick={updateUser}>Edit</Button></td>
                        <td id={`${user.id}`}><Button id={`${user.id}`} variant="danger" onClick={deleteUser}>Delete</Button></td>
                    </tr>
                )
            })}
        </tbody>
        </Table>
        <br />
        </div>
        )
    }
    else{
        return (
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        )
    }
}

export default EmployeeList