import SearchBar from '../SearchBar/SearchBar';
import React from 'react';
import './SearchForm.css'

const SearchForm = (props) => {
    return ( //returning the prop values received from each of the properities
        <form className="SearchForm"> 
            <SearchBar term={props.term} setTerm={props.setTerm} handleSearch={props.handleSearch}/>
        </form>
    )
}

export default SearchForm;

