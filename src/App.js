import React, { Component, useEffect, useState } from 'react'
import { Main } from './views/Main'


export default class App extends Component {
  
  // const [seedLibrary, setSeedLibrary] = useState([]);
    
  // useEffect(() => {
  //     loadData();
  // }, []);

  // const loadData = async() => {
  //     const response = await fetch('/api/listall');
  //     const data = await response.json();
  //     setSeedLibrary(data.hits);
  //     console.log(data.hits);
  // }
  
  // Attempt at connecting to Express
  state = {
    data: null
  };

  componentDidMount() {
    this.callBackendAPI()
    .then(res => this.setState({ data: res.express }))
    .catch(err => console.log(err));
  }
  callBackendAPI = async () => {
    console.log('Are you there')
    const response =  fetch('/backend')
      .then(response => console.log(response.json()));
    console.log(response)
    const body = await response.data;
    console.log(body)

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  };




  render() {
    return (
      <div>
        <Main />
      </div>
    )
  }
}


