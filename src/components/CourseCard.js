import React, { Component } from 'react';
import Course from './Course';


export default class CourseCard extends Component {

  state = {
    slug: '',
    showDetails: false,
  }

  handleShowDetails = () => {
    if (this.state.showDetails === false) {
      this.setState({ showDetails: true });
    } else {
      this.setState({ showDetails: false });
    }
  }
  componentDidMount() {
    const { slug, title } = this.props;
    this.setState({ slug: slug });
    localStorage.setItem('slug', slug);
    localStorage.setItem('title', title)
  }

  render() {
    const { title } = this.props;
    return (
      <div className="CourseCard">
        <div className="card">
          <h1 className="card-header">{title}</h1>
          {!this.state.showDetails &&
            <button className="button detailsButton" onClick={() => this.handleShowDetails()}>Details</button>
          }
          {this.state.showDetails && (
            <div>
              <Course />
              <button className="button hideDetails" onClick={() => this.handleShowDetails()}>Hide Details</button>
            </div>
          )}


        </div>
      </div>
    )
  }
}
