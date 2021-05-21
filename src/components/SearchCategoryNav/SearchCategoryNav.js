import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import SearchCategories from '../SearchCategories/SearchCategories';
import SearchResults from '../SearchResults/SearchResults';

const SearchCategoryNav = (props) => {
  return ( //returning each of the search components with the props passed for each properity
    <>
        <SearchForm term={props.term} setTerm={props.setTerm} handleSearch={props.handleSearch}/>
        <SearchCategories category={props.current} setCategory={props.setCategory}/> 
        <SearchResults searchPerformed={props.searchPerformed} images={props.images}/>
    </>
  );
};

export default SearchCategoryNav;