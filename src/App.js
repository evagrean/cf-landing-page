import React, { Component } from 'react';
import CourseList from './components/CourseList';
import Course from './components/Course';

import './App.scss'

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Choose your favorite CF Course</h1>
        <CourseList />
        <Course />
      </div>
    )
  }
}

