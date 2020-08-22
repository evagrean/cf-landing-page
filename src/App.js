import React, { Component } from 'react';
import CourseList from './components/CourseList';

import './App.scss'

export default class App extends Component {

  state = {
    url: 'https://private-e05942-courses22.apiary-mock.com/courses',
    courses: [],
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="App">
        <h1>Choose your favorite CF Course</h1>
        <CourseList />
      </div>
    )
  }
}

