import {Form, Button} from 'react-bootstrap';
import {useState} from 'react';



function UpdateEmployee({user, setEdit}) {
    async function createUser(credentials){
        return fetch('http://localhost:5000/api/users/'+`${user.id}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${JSON.parse(sessionStorage.getItem('auth-token'))?.token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
        .then(data => {
            setEdit(false);
            data.json()
        })
    }
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

    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [gender, setGender] = useState(user.gender);
    const [salary, setSalary] = useState(user.salary);
    const [role, setRole] = useState(user.role);
    const [department, setDepartment] = useState(user.department);
    const [email, setEmail] = useState(user.email);
    const [phone, setPhone] = useState(user.phone);
    const [password, setPassword] = useState(user.password);
    const [DOB, setDOB] = useState(user.DOB);
    const [DOJ, setDOJ] = useState(user.DOJ);
    return (
        <div>
            <h2>Update Employee</h2>
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
                    <Form.Control as = "select" 
                    value={gender}
                    onChange = {e => setGender(e.target.value)}     
                    >
                    <option hidden selected value > -- select an option -- </option>
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                    <option value="T">None of the above</option>
                    </Form.Control>
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
                <br/>
            </Form>
        </div>
        
    )
}

export default UpdateEmployee;
