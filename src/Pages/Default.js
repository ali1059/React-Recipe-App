import React,{Component} from 'react';
import Header from '../Components/Header';
import {Link} from 'react-router-dom';

export default class Default extends Component{
  render(){
    return(
      <Header title='404' styleClass='default-hero'>
       <h2 className='text-light text-uppercase'>You are in wrong page</h2>
       <Link to='/' className='text-uppercase btn btn-secondary btn-lg mt-3' >
         Return Home
       </Link>
      </Header>
    );
  }
}
