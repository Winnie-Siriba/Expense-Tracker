import React from "react";

function ExpenseTable({expenses, onDelete, onSort}){
return (
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th onClick = {() => onSort('description')}>Description</th> 
                <th onClick={() => onSort('category')}>Category</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {/*loops through each expense a creates a row for each*/}
            {expenses.map(exp =>(
                <tr key={exp.id}> {/*//unique key for each item */}
                   <td>{exp.name}</td>
                   <td>{exp.description}</td>
                   <td>{exp.category}</td>
                   {/* ensures amount shows 2 decimal places */}
                   <td>Kshs{exp.amount.toFixed(2)}</td>
                   {/*updates date into more readable form */}
                   <td>{new Date(exp.date).toLocaleDateString()}</td>
                   <td>
                    <button onClick={() =>onDelete(exp.id)}>Delete</button>
                   </td>
                </tr>

            ))
            }
        </tbody>
    </table>
)
}
export default ExpenseTable;
