import React, {useState}  from "react"; 

function ExpenseForm({onAddExpense}){
    const [name,setName] = useState('');
    const [description,setDescription] = useState('');
    const [category,setCategory] = useState('')
    const [amount,setAmount] = useState('')
    const [date,setDate] = useState('')
    
    const submithandler = (e) =>{
        e.preventDefault() // prevents page from reloading
        onAddExpense({
            Id:Date.now(), // generates a unique identifier for each expense (built in JS,will not be shown in UI)
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
        <form onSubmit ={submithandler}>
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
                onchange = {e => setCategory(e.target.value)}
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
        </form>
    );
}
export default ExpenseForm