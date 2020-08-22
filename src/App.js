import React, { Component } from 'react';
import CourseList from './components/CourseList';

import './App.scss'

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <h1 className="main-heading">Choose your favorite CF Course</h1>
        <CourseList />

      </div>
    )
  }
}

