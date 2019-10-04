import React, {Component} from 'react';
import {recipeData} from '../data/tempDetails';
import {Link} from 'react-router-dom';

export default class SingleRecipe extends Component{
  constructor(props){
    super(props);
  const id = this.props.match.params.id;
  this.state ={
    recipe:{},
    id,
    isLoading:true
  };
}

async componentDidMount(){
  const url = `https://www.food2fork.com/api/get?key=${process.env.REACT_APP_API_KEY}&rId=${this.state.id}`;
  try{
    const response = await fetch(url);
    const responseData = await response.json();
    this.setState({
      recipe:responseData.recipe,
      isLoading:false
    });
    console.log(responseData);
  }
  catch(error){
     console.log(error);
  }
}

  render(){
    const {image_url,publisher,publisher_url,source_url,title,ingredients} = this.state.recipe;

    if (this.state.isLoading){
    return(
      <div className='container'>
        <div className='row'>
         <div className='col-10 col-md-6 col-lg-4 mx-auto my-5'>
           <h2 className='text-uppercase text-orange text-center'>Loading recipe ...</h2>
         </div>
        </div>
      </div>

    );
  }

  return(
    <div className='container my-5'>
     <div className='row'>
      <div className='col-10 mx-auto col-md-6 my-3'>
        <Link to='/recipes' className='btn btn-warning mb-5 text-capitalize'>Back to recipe list</Link>
        <img src={image_url} className='d-block w-100' style={{maxHeight:'30rem'}} alt='recipe image' />
      </div>
      <div className='col-10 mx-auto col-md-6 my-3'>
        <h6 className='text-uppercase'>{title}</h6>
        <h6 className='text-warning text-slanted text-capitalize'>provided by {publisher}</h6>
        <a href={publisher_url} target='_blank' rel='noopener noreferrer' className='text-capitalize btn btn-primary mt-2'> publisher webpage</a>
        <a href={source_url} target='_blank' className='text-capitalize btn btn-success mt-2 mx-2'> recipe url</a>
        <ul className='list-group mt-4'>
         <h2 className='mt-3 mb-4'>Ingredients</h2>
         {ingredients.map((item,index)=>{
           return (<li key={index} className='list-group-item text-slanted'>{item}</li>)
         })}
        </ul>
      </div>
     </div>
    </div>
  );
  }
}
