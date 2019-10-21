import React, { Component } from 'react';
import axios from 'axios'

import TextBox from '../../components/TextBox/TextBox'

class LoginScreen extends Component {
  state = {}
  render() {
    return (
      <div className="text-center">
        <div className="pt-64 text-6xl font-semibold text-clone">Netflix</div>
        <TextBox />
      </div >
    );
  }
}

export default LoginScreen;