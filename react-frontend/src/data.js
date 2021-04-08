import React from 'react';

const Data = (props) => {
  fetch('/data/').then(res => {
    if(res.ok){
      return res.json()
    }
  })

  return(
    <div>{}</div>
  )
}

export default Data;
