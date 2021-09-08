import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <React.Fragment>
    <h1>Directors Page</h1>
    
    {directors.map((director, index) => (
  <div key = {index}>

    <h2>Name: {director.name}</h2>
    <h3>Movies: </h3>
    <ul>
      {director.movies.map((movie, index) => (
      <li key = {index}>{movie}</li>

      ))}
    </ul>
  </div>

 ))}

</React.Fragment>
  );
}

export default Directors
