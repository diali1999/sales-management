import {Form, Button, Row,Col} from 'react-bootstrap';
import {React,useState,Fragment} from 'react';
//import NumericInput from 'react-native-numeric-input'

async function createOrder(credentials){
    return fetch('http://localhost:5000/api/orders', {
        method: 'POST',
        headers: {
            'authorization': `Bearer ${JSON.parse(sessionStorage.getItem('auth-token'))?.token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(data => data.json())
}

function OrderForm() {
    const handleSubmit = async e => {
        e.preventDefault();
        const OrderCreated = await createOrder({
            product,
            date,
            customer
        });
        console.log(OrderCreated);
        setProduct([{productName: [], quantity: []}]);
        setDate("");
        setCustomer("");
    }

    const handleInputChange = (index,e) => {
        const values = [...product];
        console.log(e.target.name);
        if (e.target.name === "productName") {
          values[index].productName = e.target.value;
        } else {
          values[index].quantity = e.target.value;
        }
    
        setProduct(values);
    }

    const handleAddFields = () => {
        const values = [...product];
        values.push({ productName: [], quantity: [] });
        setProduct(values);
    }
    
    const handleRemoveFields = index => {
        console.log(index);
        const values = [...product];
        values.splice(index, 1);
        setProduct(values);
    }
    

    const [product, setProduct] = useState([
        { productName: [], quantity: [] }
      ]);
    const [date, setDate] = useState("");
    const [customer, setCustomer] = useState("");
    return (
        <div>
            <h2>Add Order</h2>
            <Form onSubmit={handleSubmit}>
            {
                product.map((item, index) => (
                    <Fragment key={`${item}~${index}`}>
                        <Form.Group controlId="formProduct">
                            <Row>
                            <Col>
                            <Form.Label>Product Name</Form.Label>
                            <Form.Control
                            type="text" 
                            name="productName"
                            placeholder="Enter Product Name" 
                            value={item.productName}
                            onChange = { e =>  handleInputChange(index,e)}    
                            />
                            </Col>
                            <Col>
                            <Form.Label>Quantity</Form.Label>
                            <Form.Control 
                            name="quantity"
                            placeholder="Enter Quantity" 
                            value={item.quantity}
                            onChange = {e => handleInputChange(index,e)}    
                            />
                            </Col>
                        </Row>
                        </Form.Group>
                        <Button onClick={() => handleAddFields()}>Add</Button>{' '}
                        <Button variant="primary" onClick={() => handleRemoveFields(index)}>Remove</Button>
                    </Fragment>
                ))}
                <Form.Group controlId="formDate">
                    <Form.Label>Date</Form.Label>
                    <Form.Control type="date" placeholder="Enter Date" 
                    value={date}
                    onChange = {e => setDate(e.target.value)}    
                />
                </Form.Group>
                <Form.Group controlId="formCustomer">
                    <Form.Label>Customer Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Customer Name" 
                    value={customer}
                    onChange = {e => setCustomer(e.target.value)}    
                />
                </Form.Group>
                <pre>
                    {JSON.stringify(product, null, 2)}
                </pre>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
        
    )
}

export default OrderForm;
