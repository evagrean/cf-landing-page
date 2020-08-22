import React, { Component } from 'react'
import axios from 'axios';

export default class Course extends Component {

  state = {
    description: '',
    dates: [],
    prices: [],

  };

  async componentDidMount() {
    const slug = localStorage.getItem('slug');

    const courseDetails = await axios.get(`https://private-e05942-courses22.apiary-mock.com/courses/${slug}`);
    console.log(courseDetails.data);
    this.setState({
      description: courseDetails.data.description,
      dates: courseDetails.data.dates,
      prices: courseDetails.data.prices
    });
  }

  render() {
    return (
      <div className="Course">

      </div>
    )
  }
}
