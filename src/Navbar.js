import React, { Component } from 'react';
 
import { 
  BrowserRouter as Router, // we are aliasing this module for a cleaner call
  Route,
  Link
  // etc.
} from 'react-router-dom';

class Navbar extends Component {
    render(){
      return(

            <div className="nav">
                <Link to="/">Home</Link> |
                
            </div>

      );
    }
}

export default Navbar;

