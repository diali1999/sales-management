import React, {useEffect, useState} from 'react'
import {Table, Spinner, Button} from 'react-bootstrap';
// import Cookies from 'js-cookie';



function ExpenseReportList() {
    const [expenseReports, setExpenseReports] = useState([]);
    const [isBusy, setBusy] = useState(true);
    async function getExpenseReport(){
        return fetch('http://localhost:5000/api/expense_report',{
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
        const statusChange = await fetch(`http://localhost:5000/api/expense_report/status`, {
            method: 'POST',
            headers:{
                'authorization': `Bearer ${JSON.parse(sessionStorage.getItem('auth-token'))?.token}`,
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({id: reportId})
        });
        getExpenseReport().then(data=>{
            setExpenseReports(data);
        });
    }
    useEffect(() => {
        getExpenseReport()
        .then(data=>{
            setExpenseReports(data);
            setBusy(false);
        })
    }, []);
    if(!isBusy){
        return (
        <div>
            <h2>Expense Report List</h2>
            <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Report Id</th>
                    <th>Employee Id</th>
                    <th>Type</th>
                    <th>Expense</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Remarks</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
            {expenseReports.map(expenseReport=>{
                console.log(expenseReport);
                return(
                    <tr key={`${expenseReport.id}`}>
                        <td>{expenseReport.id}</td>
                        <td>{expenseReport.userId}</td>
                        <td>{expenseReport.type}</td>
                        <td>{expenseReport.expense}</td>
                        <td>{expenseReport.date}</td>
                        <td>{expenseReport.status}</td>
                        <td>{expenseReport.remarks}</td>
                        <td id={`${expenseReport.id}`}><Button id={`${expenseReport.id}`} variant="danger" onClick={changeStatus}>Change Status</Button></td>
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

export default ExpenseReportList;