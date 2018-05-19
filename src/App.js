import React, {Component} from 'react';
import {firestore} from "./firebase";
import {BrowserRouter as Router, Route} from "react-router-dom";

import {LoadableHome} from './views/frontpage/home';
import {LoadableRegister} from './views/frontpage/register';
import {LoadableLogin} from './views/frontpage/login';

class App extends Component {

  componentWillMount() {
    firestore.collection("users").add({
      first: "Ada",
      last: "Lovelace",
      born: 1815
    })
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  }

  render() {
    return (
      <Router>
        <div className="app">
          <Route exact path="/" component={LoadableHome}/>
          <Route exact path="/signup/:type" component={LoadableRegister}/>
          <Route exact path="/signin" component={LoadableLogin}/>
        </div>
      </Router>
    );
  }
}

export default App;
