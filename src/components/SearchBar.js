import React from "react";
function SearchBar({ SearchTerm , onSearch }){
    return(
       <input 
          type = "text"
          placeholder=" Search Expenses"
          value = {SearchTerm}
          onChange = {(e) =>onSearch(e.target.value)}
       />
)
}

export default SearchBar