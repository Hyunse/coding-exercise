import React from 'react';
import QueryString from 'query-string';

/**
 * About Pages
 */
const About = ({ location, match }) => {
  const 
    query = QueryString.parse(location.search),
    detail = query.detail === 'true';


  return (
    <div>
      <h2>About {match.params.name}</h2>
      {/* Conditional && expression */}
      { detail && 'detail : hello!'}
    </div>
  )
};


export default About;