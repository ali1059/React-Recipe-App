import React from 'react';
import './App.css';
import Home from "./Pages/Home";
import Recipes from "./Pages/Recipes";
import SingleRecipe from "./Pages/SingleRecipe";
import Default from "./Pages/Default";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Navbar from "./Components/Navbar"

function App() {
  return (
    <Router>
     <main>
      {/*Navbar */ }
      <Navbar />
      <Switch>
         <Route path="/" exact component = {Home} />
         <Route path="/recipes" exact component = {Recipes} />
         <Route path="/recipes/:id" component = {SingleRecipe} />
         <Route component = {Default} />
      </Switch>
     </main>
    </Router>
  );
}

export default App;
