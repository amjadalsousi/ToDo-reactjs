
import './App.css';
import React, { Component } from 'react';

//import React,{useState} from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './routes/Home';
import Registry from './routes/Registry';



function App() {

  return (
    <div className="App">

      <h3 className="registry">To Do App Created By Amjad</h3>

      <BrowserRouter>
        <Switch>
          <Route path="/home" exact>
            <Home />
          </Route>

          <Route path="/registry">
            <Registry />
          </Route>

        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
