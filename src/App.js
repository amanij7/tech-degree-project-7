import './App.css';
import React, { useState } from 'react'; //importing react hook
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"; //??? manipulate the DOM

import SearchCategoryNav from './components/SearchCategoryNav/SearchCategoryNav';
import axios from 'axios'; //external library for making requests from the page
import apiKey from './config';

//setting the state 
const App = () => {
  //'term' returns the state variable and 'setTerm' sets the value
  const [term, setTerm] = useState('');
  const [category, setCategory] = useState('dogs');
  const [images, setImages] = useState([]);

   const handleSearch = (evt) => { //??
    // Prevent browser from submitting the form
     evt.preventDefault();
    
     //using the if/else statement to either display search results or return an error
    if (term !== '') {
      const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&
        tags=${category}&extras=url_s&api_key=${apiKey}&text=${term}&per_page=20&
        sort=relevance&content_type=1&format=json&nojsoncallback=1`;
    //fetching images
      axios.get(url)
        .then(response => {
          if (response.data.photos && response.data.photos.photo) {
            setImages(response.data.photos.photo);
          }
        })
        .catch(error => {
          console.error('Error fetching data', error);
        });
    }
  };


  // Returns the `SearchCategoryNav` component properties with the current term
  const searchCategoryNavProps = (current) => {
    const searchPerformed = searchHasBeenDone();

   return {
      handleSearch,
      images,
      term,
      category,
      setTerm,
      setCategory,
      current,
      searchPerformed
    }
  };

  const searchHasBeenDone = () => {
    return term !== ''; //resets to an empty string after the search in completed
  };
  
  //what's being returned from the root component
  return (
    <Router>
      <div className="App-container">
      <Switch>
        {/*The paths for the default nav categories*/}
        <Route path='/cats'>
        {/*returning the 'SearchCategoryNav' component and assigning the term value to the object in the 'searchCategoryNavProps' function */}
          <SearchCategoryNav {...searchCategoryNavProps('cats')}/>
        </Route>

        <Route path='/dogs'>
          <SearchCategoryNav {...searchCategoryNavProps('dogs')}/>
        </Route>

        <Route path='/birds'>
          <SearchCategoryNav {...searchCategoryNavProps('birds')}/>
        </Route>

        <Route exact path='/'>
          <SearchCategoryNav {...searchCategoryNavProps('dogs')}/>
        </Route>
        
      </Switch>
      </div>
    </Router>
  )
};
export default App;
