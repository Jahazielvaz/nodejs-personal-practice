import React from 'react';

const FetchApi = () => {
   const apiGet = () => {
     let data = {}
    fetch('http://localhost:3001/api')
    .then((response) => response.json())
    .then((jsonRes) => data.push(jsonRes.value))

    return data;
  }

  return(

    <div>
      <h1>My Api</h1>

      <button onClick={apiGet}>Fetch Api</button>
      {/*<div>{data}</div>*/}
      <div>{}</div>
    </div>
  )
}

export default FetchApi;
