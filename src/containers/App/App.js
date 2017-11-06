import React, { Component } from 'react';

import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />

        <div className="app-body">
          <Sidebar {...this.props}/>

          <main className="main">
            <Breadcrumb />
          </main>
        </div>
      </div>
    );
  }
}

export default App;
