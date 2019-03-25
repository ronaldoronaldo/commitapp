import React, { Component } from 'react';
import GithubHeatmap from './GithubHeatmap/GithubHeatmap';
import arvore from './arvore';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='container-app'>
          <GithubHeatmap data={arvore}/>
        </div>
      </div>
    );
  }
}

export default App;
