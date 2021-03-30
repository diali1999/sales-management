import {Form, Button} from 'react-bootstrap';
import {useState} from 'react';

async function createExpenseReport(credentials){
    return fetch('http://localhost:5000/api/expense_report', {
        method: 'POST',
        headers: {
            'authorization': `Bearer ${JSON.parse(sessionStorage.getItem('auth-token'))?.token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(data => data.json())
}

function ExpenseReportForm() {
    const handleSubmit = async e => {
        e.preventDefault();
        const expenseReportCreated = await createExpenseReport({
            type,
            expense,
            date,
            remarks,
        });
        console.log(expenseReportCreated);
        setType("");
        setExpense("");
        setDate("");
        setRemarks("");
    }

    const [type, setType] = useState("");
    const [expense, setExpense] = useState("");
    const [remarks, setRemarks] = useState("");
    const [date, setDate] = useState("");
    return (
        <div>
            <h2>Add Report</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formType">
                    <Form.Label>Type</Form.Label>
                    <Form.Control
                    as ="select"
                    value={type}
                    onChange = {e => setType(e.target.value)}    
                    >
                        <option hidden selected value>---select an option---</option>
                        <option>Food</option>
                        <option>Travel</option>
                    </Form.Control> 
                </Form.Group>
                <Form.Group controlId="formExpense">
                    <Form.Label>Expense</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Enter Expense" 
                    value={expense}
                    onChange = {e => setExpense(e.target.value)}    
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
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
        
    )
}

export default ExpenseReportForm;
