import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ZoomIn } from "react-bootstrap-icons";
import FilterResults from "react-filter-search";

class Dashboard extends Component {

  state = {
    data: [],
    value: ''
  };

  componentWillMount() {
    fetch('api/')
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({ data: json })
      })
  }

  handleChange = event => {
    const { value } = event.target;
    this.setState({ value });
  };

  ratings = rating => {
    return [...Array(parseInt(rating))].map((elementInArray, index) => (
      <span key={index} class="fa fa-star" style={{ color: '#E3C010' }}></span>
    ))
  }

  render() {

    const { data, value } = this.state;

    return (
      <>
        {/* Actual search box */}
        <br />
        <div className="col-12">
          <div className="input-group input-group-md w-25 mx-auto">
            <div className="input-group-prepend">
              <span className="input-group-text"><li class="fa fa-search"></li></span>
            </div>
            <input type="text" className="form-control" placeholder="search..." value={value} onChange={this.handleChange} />
          </div>
        </div>
        <div className="container">
          <FilterResults
            value={value}
            data={data}
            renderResults={results => (
              <>
                {results.map(movie => (
                  <div className="movie-card" key={movie.id}>
                    <div className="movie-header" style={{ background: "url(" + movie.posterurl + ")", backgroundSize: "cover" }}>
                      <div className="header-icon-container">
                        <a href="#">
                          <i className="material-icons header-icon"></i>
                        </a>
                      </div>
                    </div>{/*movie-header*/}
                    <div className="movie-content">
                      <div className="movie-content-header">
                        <a href="#">
                          <h3 className="movie-title">{movie.title}</h3>
                        </a>
                        <p>
                          {movie.genres.map((genre, i) => {
                            return " " + genre
                          })}

                        </p>
                      </div>
                      <div className="movie-info">
                        <div className="info-section">
                          <label>Year</label>
                          <span>{movie.year}</span>
                        </div>{/*date,time*/}
                        <div className="info-section">
                          <label>Ratings</label>
                          <span>
                            {this.ratings((movie.ratings.reduce((result, number) => result + number) / movie.ratings.length).toFixed(0))}
                          </span>
                        </div>{/*screen*/}

                      </div>
                    </div>{/*movie-content*/}
                  </div>
                ))}
              </>
            )}
          />
        </div>{/*container*/}
      </>
    );
  }
}
export default Dashboard;
