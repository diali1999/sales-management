import React, {useEffect, useState} from 'react'
import {Table, Spinner, Button} from 'react-bootstrap';
// import Cookies from 'js-cookie';



function WorkingReportList() {
    const [workingReports, setWorkingReports] = useState([]);
    const [isBusy, setBusy] = useState(true);
    async function getWorkingReport(){
        return fetch('http://localhost:5000/api/working_report',{
            method:'GET',
            headers:{
                'authorization': `Bearer ${JSON.parse(sessionStorage.getItem('auth-token'))?.token}`,
            }
        })
        .then(data=>data.json());
    }
    async function changeStatus(e){
        e.preventDefault();
        const reportId = e.target.getAttribute('id');
        console.log(reportId);
        const statusChange = await fetch(`http://localhost:5000/api/working_report/status`, {
            method: 'POST',
            headers:{
                'authorization': `Bearer ${JSON.parse(sessionStorage.getItem('auth-token'))?.token}`,
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({id: reportId})
        });
        getWorkingReport().then(data=>{
            setWorkingReports(data);
        });
    }
    useEffect(() => {
        getWorkingReport()
        .then(data=>{
            setWorkingReports(data);
            setBusy(false);
        })
    }, []);
    if(!isBusy){
        return (
        <div>
            <h2>Working Report List</h2>
            <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Report Id</th>
                    <th>Employee Id</th>
                    <th>Destination</th>
                    <th>Remarks</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Location</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
            {workingReports.map(workingReport=>{
                return(
                    <tr key={`${workingReport.id}`}>
                        <td>{workingReport.id}</td>
                        <td>{workingReport.userId}</td>
                        <td>{workingReport.destination}</td>
                        <td>{workingReport.remarks}</td>
                        <td>{workingReport.date}</td>
                        <td>{workingReport.status}</td>
                    <td><a target="_blank" rel="noreferrer" href={`https://maps.google.com/?q=${workingReport.latitude},${workingReport.longitude}`}>View Location</a></td>
                        <td id={`${workingReport.id}`}><Button id={`${workingReport.id}`} variant="danger" onClick={changeStatus}>Change Status</Button></td>
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

export default WorkingReportList;