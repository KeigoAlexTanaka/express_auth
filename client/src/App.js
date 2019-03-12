import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

const URL = 'http://localhost:8080';

class App extends Component {
  async componentDidMount() {
    const user = {
      name: 'bobby talley',
      email: 'bobby@gmail.com',
      password: 'strong pass'
    };

    const email = 'bobby@gmail.com';
    const password = 'strong pass';
    const data = {
      email,
      password,
    };

    const resp = await axios.post(`${URL}/users/login`, data);
    console.log(resp.data);
    const { token } = resp.data;

    const otherResp = await axios.get(`${URL}/tweets`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log(otherResp.data);
  }

  render() {
    return (
      <div className="App">
        <h1>Auth Demo</h1>
        <div>
          <h2>Register Form</h2>
          <form>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
