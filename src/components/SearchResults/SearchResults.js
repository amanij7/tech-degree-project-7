import React from 'react';
import './SearchResults.css';

const SearchResults = (props) => {
    //If/else statement to either display the searched results or 'not found' if there are no results
    if (!props.searchPerformed) {
        return null;
    }
    if (props.images.length === 0) {
        return (
            <>
                <h2>Results</h2>
                <h3>Not found</h3>
            </>
        );
    }
    return ( //using the map method and returning the photo array and also the key/index value
        <div className="SearchResults-photo-container">
           <h2>Results</h2>
            <ul>
                {props.images.map((photo, index) => {
                    return <li key={index}>
                        <img src={photo.url_s} alt={photo.title}/>
                    </li>
                })}
            </ul>
        </div>
    );
}

export default SearchResults;