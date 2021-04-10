import React from 'react';


const fetchApiPost = () => {
  const data = {
    name: "jazzy",
    last: "vaz"
  }
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }

  if(data === {}){
    console.log('Data Failed...')
  } else {
    fetch('/localhost:3001/api/people/', options);
  }
}

export default fetchApiPost;
