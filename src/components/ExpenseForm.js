import React, {useState}  from "react"; 
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Container, Row, Col } from 'react-bootstrap';

function ExpenseForm({onAddExpense}){
    const [name,setName] = useState('');
    const [description,setDescription] = useState('');
    const [category,setCategory] = useState('')
    const [amount,setAmount] = useState('')
    const [date,setDate] = useState('')
    
    const submithandler = (e) =>{
        e.preventDefault() // prevents page from reloading
        onAddExpense({
            id:Date.now(), // generates a unique identifier for each expense (built in JS,will not be shown in UI)
            name,
            description,
            category,
            amount: parseFloat(amount), //converts string to a floating number 
            date
    })
    //reset form fields 
    setName(''); setDescription(''); setCategory(''); setAmount(''); setDate('');
    }
    return (
        <>           
            <Form onSubmit ={submithandler}>
                <h3>Add Expense</h3>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" value={name} onChange = {e => setName(e.target.value)} 
                    required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" value={description} onChange = {e => setDescription(e.target.value)} style={{height: '100px'}} 
                    required/>
                </Form.Group>

                <FloatingLabel controlId="formCategory" label="Category">
                    <Form.Select aria-label="Floating label select example" value = {category}
                    onChange = {e => setCategory(e.target.value)}
                    required>
                        <option>-- Select --</option>
                        <option value="food">Food</option>
                        <option value="transport">Transport</option>
                        <option value="entertainment">Entertainment</option>
                        <option value="necessities">Necessities</option>
                        <option value="other">Other</option>
                    </Form.Select>
                </FloatingLabel>

                <Form.Group className="mb-3" controlId="formAmount">
                    <Form.Label>Amount</Form.Label>
                    <Form.Control type="number" value={amount} onChange = {e => setAmount(e.target.value)} 
                    required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formDate">
                    <Form.Label>Date</Form.Label>
                    <Form.Control type="date" value={date} onChange = {e => setDate(e.target.value)} 
                    required/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>                    
        </>
    );
}
export default ExpenseForm


{/* <form onSubmit ={submithandler}>
                <div> 
                    <label>Name</label>
                    <input 
                    type= "text"
                    value = {name}
                    onChange = {e => setName(e.target.value)}
                    required
                    />
                </div>
                <div>
                    <label>Description</label>
                    <textarea
                    value = {description}
                    onChange = {e =>setDescription(e.target.value)}
                    required
                    />
                </div>
                <div>
                    <label>Category</label>
                    <select
                    value = {category}
                    onChange = {e => setCategory(e.target.value)}
                    required>
                    <option value = "Food">Food</option>
                    <option value = "Transport">Transport</option>
                    <option value = "Entertainment">Entertainment</option>
                    <option value = "Necessities">Necessities</option>
                    <option value = "Other">Other</option>
                    </select>
                </div>
                <div>
                    <label>Amount</label>
                    <input
                    type = "number"
                    value = {amount}
                    onChange = {e => setAmount(e.target.value)}
                    required
                    />
                </div>
                <div>
                    <label>Date</label>
                    <input 
                    type = "date"
                    value = {date}
                    onChange = {e => setDate(e.target.value)}
                    required
                    />
                </div>

                <button type = "submit">Submit</button>
            </form> */}