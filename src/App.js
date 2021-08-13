import React, { Component, useEffect, useState } from 'react'
import { Main } from './views/Main'


export default class App extends Component {


  
  // callBackendAPI = async () => {
  //   console.log('Are you there')
  //   const response =  fetch('/backend')
  //     .then(response => console.log(response.json()));
  //   console.log(response)
  //   const body = await response.data;
  //   console.log(body)

  //   if (response.status !== 200) {
  //     throw Error(body.message)
  //   }
  //   return body;
  // };




  render() {
    return (
      <div>
        <Main />
      </div>
    )
  }
}


