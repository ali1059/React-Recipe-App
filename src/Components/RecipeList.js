import React,{Component} from 'react';
import Recipe from './Recipe';
export default class RecipeList extends Component{
  render(){
    return(
      <div>
       <h1>Hello from Recipe List</h1>
       <Recipe />
      </div>
    );
  }
}
