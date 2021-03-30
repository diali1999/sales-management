import {Form, Button} from 'react-bootstrap';
import {useState} from 'react';

async function createWorkingReport(credentials){
    return fetch('http://localhost:5000/api/working_report', {
        method: 'POST',
        headers: {
            'authorization': `Bearer ${JSON.parse(sessionStorage.getItem('auth-token'))?.token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(data => data.json())
}

function WorkingReportForm() {
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const workingReportCreated = await createWorkingReport({
            destination,
            latitude,
            longitude,
            date,
            remarks,
        });
        console.log(workingReportCreated);
        setDestination("");
        setLongitude();
        setLatitude();
        setDate("");
        setRemarks("");
    }

    const getLocation = async(e)=>{
        e.preventDefault();
        navigator.geolocation.getCurrentPosition(function(position) {
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
            setLongitude(position.coords.longitude);
            setLatitude(position.coords.latitude);
        },(err)=>{console.log(err)},{enableHighAccuracy:true});
    }

    const [destination, setDestination] = useState("");
    const [longitude, setLongitude] = useState();
    const [latitude, setLatitude] = useState();
    const [remarks, setRemarks] = useState("");
    const [date, setDate] = useState("");
    return (
        <div>
            <h2>Add Working Report</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formDestination">
                    <Form.Label>Destination</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Enter Destination" 
                    value={destination}
                    onChange = {e => setDestination(e.target.value)}    
                    />
                </Form.Group>   
                <Form.Group controlId="formDate">
                    <Form.Label>Date</Form.Label>
                    <Form.Control type="date" 
                    value={date}
                    onChange = {e => setDate(e.target.value)}    
                    />
                </Form.Group>
                <Form.Group controlId="formRemarks">
                    <Form.Label>Remarks</Form.Label>
                    <Form.Control type="textarea" 
                      value={remarks}
                    onChange = {e => setRemarks(e.target.value)}      
                    />
                </Form.Group>
                <Button onClick={getLocation}>Log Location</Button>{' '}
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
        
    )
}

export default WorkingReportForm;
