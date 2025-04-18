import './App.css';
import React, {useState}  from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

import ExpenseForm from './components/ExpenseForm';
import ExpenseTable from './components/ExpenseTable';
import SearchBar from './components/SearchBar';

function App() {
  const [expenses, setExpenses] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  
  //adds new expense
  const handleAddExpense = (expense) => {
    setExpenses((prev) => [expense,...prev])
  }
  //deletes expense
    const handleDelete = (id) => {
    setExpenses((prev)=> prev.filter((exp)=> exp.id !== id))
  }
  //sort expenses
    const handleSort = () =>{
      const sorted = [...expenses].sort((a,b) => a.category - b.category)
      setExpenses(sorted)
    }
    //filter expenses based on search ; name, description, category
    const filteredExpenses = expenses.filter((expense) =>
    expense.name.toLowerCase().includes(searchTerm.toLowerCase()) || //shows presence of multiple expressions after the arrow function
    expense.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    expense.category.toLowerCase().includes(searchTerm.toLowerCase())
    )
  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <p>Start taking control of your finances and life. Record, categorize and analyze your spending.</p>
        <Container fluid className="p-4 m-3 border border-dark">
            <Row>
              <Col md={4}>
                <ExpenseForm onAddExpense={handleAddExpense}/>      
              </Col>
              <Col md={8} className='border-start border-start-3 border-dark ps-3'>
                <SearchBar 
                  searchTerm={searchTerm} 
                  onSearch={setSearchTerm}
                />
                <ExpenseTable 
                  expenses={filteredExpenses}
                  onDelete={handleDelete}
                  onSort={handleSort}
                />
              </Col>
            </Row>
        </Container>
    </div>
  );
}

export default App;
