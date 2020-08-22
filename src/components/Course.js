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
    const title = localStorage.getItem('title');
    this.setState({ title: title });

    const courseDetails = await axios.get(`https://private-e05942-courses22.apiary-mock.com/courses/${slug}`);
    console.log(courseDetails.data);
    this.setState({
      description: courseDetails.data.description,
      dates: courseDetails.data.start_dates,
      prices: courseDetails.data.prices
    });
  }

  render() {
    const { title, description, dates } = this.state;
    return (
      <div className="Course">
        <div>{title}: {description}</div>
        <div>Next Start Date: {dates[0]}</div>
        <div>Other Start Date: {dates[1]}</div>

      </div>
    )
  }
}
