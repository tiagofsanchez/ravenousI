import React from 'react';

import './App.css';
import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';
import Yelp from './util/Yelp';



/*const business = {
  imageSrc: ,
  name: ,
  address: ,
  city: ,
  state: ,
  zipCode: ,
  category: ,
  rating: ,
  reviewCount: 
};

const businesses = [
  business,
  business,
  business,
  business,
  business,
  business,

];*/

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      businesses: []
    };
    this.searchYelp = this.searchYelp.bind(this);
  }
  
  searchYelp (term, location, sortBy) {
    Yelp.searchYelp(term, location, sortBy).then(businesses => {
      this.setState ({businesses: businesses});
    });   
  }
  
  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp}/>
        <BusinessList businesses={this.state.businesses} />
      </div>
    );
  }
}

export default App;
