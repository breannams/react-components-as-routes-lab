import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <React.Fragment>
    <h1>Actors Page</h1>
    
    {actors.map((actor, index) => (
  <div key = {index}>

    <h2>Name: {actor.name}</h2>
    <h3>Movies: </h3>
    <ul>
      {actor.movies.map((movie, index) => (
      <li key = {index}>{movie}</li>

      ))}
    </ul>
  </div>

 ))}

</React.Fragment>
  );
};

export default Actors;
