import React, { Component } from 'react';


export default class CourseCard extends Component {

  state = {
    slug: '',
  }

  componentDidMount() {
    const { slug } = this.props;
    this.setState({ slug: slug });
    localStorage.setItem('slug', this.state.slug);

  }

  render() {
    const { title } = this.props;
    return (
      <div className="CourseCard">
        <div className="card">
          <h1 className="card-header">{title}</h1>
          <button>See Details</button>
        </div>
      </div>
    )
  }
}
