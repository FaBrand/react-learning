import React from 'react';
import './App.css';
import Child from './Child.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function Childs(){
    const children_ids = [1,2,3,4,5,6];
    return children_ids.map((item, index) => (<Child id={item} key={index} />));

};

export default function App() {
  return (
  <Router>
      <Switch>
        <Route 
            path="/:id"
            render={(props) => (<Child id={props.match.params.id} />)}
         />
        <Route exact path="/" >
            <Childs />
         </Route>
      </Switch>
  </Router>
  );
}

