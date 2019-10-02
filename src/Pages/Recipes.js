import React, {Component} from 'react';
import RecipeList from '../Components/RecipeList';
import Search from '../Components/Search';
import {recipeData} from '../data/tempList';

export default class Recipes extends Component{
  constructor(props){
    super(props)
  }
  state={
    recipes: recipeData,
    search:' '
  }

  handleChange=(e)=>{
    this.setState({
      search: e.target.value
    });
  };

  handleSubmit=(e)=>{
    console.log("I am ckicked");
    e.preventDefault();
  }

  render(){
    return(
      <>
       <Search search={this.state.search}
       handleChange={this.handleChange}
       handleSubmit={this.handleSubmit}  />
       <RecipeList recipes={this.state.recipes} />
      </>
    );
  }
}
