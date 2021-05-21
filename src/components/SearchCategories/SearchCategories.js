import React from 'react';
import './SearchCategories.css';
import { useHistory } from 'react-router-dom';//importing the "useHistory" hook

const SearchCategories = (props) => {
    let history = useHistory();//give access to the history props
  //event handler to set the selected categoryType to the search
    const handleClick = (categoryType) => {
      props.setCategory(categoryType);
      history.push(`/${categoryType}`);
    };

    return (
            <nav className="SearchCategories-main-nav">
            <ul>
            {/*Event listener added to each button with a ternary operator for the style element */}
                <li className={props.category === 'cats' ? 'SearchCategories-active' : ''}>
                  <button onClick={() => handleClick('cats')}>Cats</button>
                </li>
                <li className={props.category === 'dogs' ? 'SearchCategories-active' : ''}>
                  <button onClick={() => handleClick('dogs')}>Dogs</button>
                </li>
                <li className={props.category === 'birds' ? 'SearchCategories-active' : ''}>
                  <button onClick={() => handleClick('birds')}>Birds</button>
                </li>
            </ul>
            </nav>
    );
}

export default SearchCategories;