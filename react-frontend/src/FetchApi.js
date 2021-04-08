import React from 'react';

const FetchApi = () => {

   const apiGet = () => {
    fetch('http://localhost:3001')
    .then((response) => response.json())
    .then((json) => console.log(json))
  }

  return(
    <div>
      <h1>My Api</h1>

      <button onClick={apiGet}>Fetch Api</button>
    </div>
  )
}

export default FetchApi;
