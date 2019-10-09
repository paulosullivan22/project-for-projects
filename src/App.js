import React from 'react';

import './App.css'

import Menu from './Menu'
import Projects from './Projects'
import IndividualProject from './IndividualProject'


class App extends React.Component {
  state = {
    selectedProject: null
  }

  handleChange = id => {
    this.setState({ selectedProject: id })
  }

  projectReset = () => {
    this.setState({ selectedProject: null })
  }

  render () {
    return (
      <div className="App">

        <h1>Project for Projects</h1>

        <div className='project-container'>

        <Menu />

        {this.state.selectedProject ? 
        
          <IndividualProject id={this.state.selectedProject}/> : <Projects selectProject={this.handleChange} />
        }

        </div>

        <p className='reset' onClick={this.projectReset}>Click here to view all projects</p>

      </div>
    );
  }
}

export default App;
