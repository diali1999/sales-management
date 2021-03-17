import {Form, Button} from 'react-bootstrap';
import {useState} from 'react';

async function createUser(credentials){
    return fetch('http://localhost:5000/api/users', {
        method: 'POST',
        headers: {
            'authorization': `Bearer ${JSON.parse(sessionStorage.getItem('auth-token'))?.token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(data => data.json())
}

function EmployeeForm({user}) {
    const handleSubmit = async e => {
        e.preventDefault();
        const userCreated = await createUser({
            firstName,
            lastName,
            gender,
            role,
            department,
            email,
            phone,
            DOB,
            DOJ,
            salary,
            password
        });
        console.log(userCreated);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setPassword("");
        setGender("");
        setSalary("");
        setRole("");
        setDepartment("");
        setDOJ("");
        setDOB("");
    }

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [gender, setGender] = useState("");
    const [salary, setSalary] = useState("");
    const [role, setRole] = useState("");
    const [department, setDepartment] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [DOB, setDOB] = useState("");
    const [DOJ, setDOJ] = useState("");
    return (
        <div>
            <h2>Add Employee</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Enter First Name" 
                    value={firstName}
                    onChange = {e => setFirstName(e.target.value)}    
                    />
                </Form.Group>
                <Form.Group controlId="formLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Enter Last Name" 
                    value={lastName}
                    onChange = {e => setLastName(e.target.value)}    
                    />
                </Form.Group>
                <Form.Group controlId="formGender">
                    <Form.Label>Gender</Form.Label>
                    <Form.Control type="text" placeholder="Enter M or F or T" 
                    value={gender}
                    onChange = {e => setGender(e.target.value)}    
                    
                    />
                </Form.Group>
                <Form.Group controlId="formSalary">
                    <Form.Label>Salary</Form.Label>
                    <Form.Control type="text" placeholder="Enter Salary" 
                    value={salary}
                    onChange = {e => setSalary(e.target.value)}    
                    
                    />
                </Form.Group>
                <Form.Group controlId="formRole">
                    <Form.Label>Role</Form.Label>
                    <Form.Control type="text" placeholder="Enter Role" 
                    value={role}
                    onChange = {e => setRole(e.target.value)}    
                    />
                </Form.Group>
                <Form.Group controlId="formDepartment">
                    <Form.Label>Department</Form.Label>
                    <Form.Control type="text" placeholder="Enter Department" 
                    value={department}
                    onChange = {e => setDepartment(e.target.value)}    
                    
                    />
                </Form.Group>
                <Form.Group controlId="formPhone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="text" placeholder="Enter Phone" 
                    value={phone}
                    onChange = {e => setPhone(e.target.value)}    
                    
                    />
                </Form.Group>
                <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" 
                    value={email}
                    onChange = {e => setEmail(e.target.value)}    
                    
                    />
                </Form.Group>
                <Form.Group controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" 
                    value={password}
                    onChange = {e => setPassword(e.target.value)}    
                    
                    />
                </Form.Group>
                <Form.Group controlId="formDOB">
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control type="date" 
                    value={DOB}
                    onChange = {e => setDOB(e.target.value)}    
                    
                    />
                </Form.Group>
                <Form.Group controlId="formDOJ">
                    <Form.Label>Date of Joining</Form.Label>
                    <Form.Control type="date" 
                      value={DOJ}
                    onChange = {e => setDOJ(e.target.value)}      
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
        
    )
}

export default EmployeeForm;
