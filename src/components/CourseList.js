import React, { Component } from 'react';
import axios from 'axios';
import CourseCard from './CourseCard';

export default class CourseList extends Component {

  state = {};

  async componentDidMount() {
    const response = await axios.get(`https://private-e05942-courses22.apiary-mock.com/courses`);
    console.log(response.data);
    this.setState({ courses: response.data });
  }

  render() {
    const { courses } = this.state;
    return (
      <div className="CourseList">
        {courses ? (
          <div className="list">
            {courses.map(course => (
              <CourseCard key={course.title} title={course.title} slug={course.slug} start={course.next_start_formatted} />
            ))}
          </div>
        ) : (<div>Loading courses...</div>)}
      </div>
    );
  }
}
