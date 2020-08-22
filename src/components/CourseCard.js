import React, { Component } from 'react'


export default class CourseCard extends Component {


  render() {
    const { title, slug, start } = this.props;
    return (
      <div className="CourseCard">
        <div className="card">
          <h1 className="card-header">{title}</h1>
          <p>{start}</p>
          <button>Details</button>
        </div>
      </div>
    )
  }
}
