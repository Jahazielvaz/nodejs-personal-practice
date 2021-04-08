import React from 'react';

const FetchApi = () => {
   const apiGet = () => {
    fetch('http://localhost:3001/api'
    )
    .then((response) => response.json())
    .then((jsonRes) => jsonRes)
  }

  return(

    <div>
      <h1>My Api</h1>

      <button onClick={apiGet}>Fetch Api</button>
      {/*<div>{data}</div>*/}
    </div>
  )
}

export default FetchApi;
