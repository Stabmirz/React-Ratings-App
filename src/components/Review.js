import React, { Component } from "react";
import Rating from "@material-ui/lab/Rating";
import Ratings from "./Ratings";
import "./Review.css";



const initialState = {
  title: "",
  review: "",
  rating: 0,
  recommendation: "",
  errors: {
    title: "",
    review: "",
    rating: 0,
    recommendation: "",
  },
  isAgreed:false,
};

class Review extends Component {
  constructor() {
    super();
    this.state = {
      ...initialState,
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    console.log(this.state);
    if(name === "rating") {
      this.setState({
        [name]: parseInt(event.target.value),
      });
    } else {
      this.setState({
        [name]: value,
      });
    }
        this.handleValidation(event);
  };

  handleValidation = (event) => {
    const { name, value } = event.target;
    let errors = this.state.errors;

    // show error message for empty input field 
    switch (name) {
      case "title":
        errors.title = value.length < 1 ? "Please enter a title!" : "";
        break;
      case "review":
        errors.review = value.length < 1 ? "Please enter a review" : "";
        break;
      case "rating":
        errors.rating = value.length < 1 ? "Please select a rating" : "";
        break;
      case "recommendation":
        errors.recommendation = value.length <1 ? "Please select a recommendation" : "";
        break;

      default:
        break;
    }

    this.setState({
      errors,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    let { title, review, rating, recommendation } = this.state;
    let errors = this.state.errors;
    
    // check if any required field is left empty and show error message
    errors.rating = rating === 0 ? "Please select a rating" : "";
    errors.title = title.length === 0 ? "Please enter a title!" : "";
    errors.review = review.length === 0 ? "Please enter a review" : "";
    errors.recommendation = recommendation.length === 0 ? "Please select a recommendation" : "";

    this.setState({
      errors,
    });

    // submit the form after checking the form validation
    if (
      rating !== 0 &&
      title.length > 0 &&
      review.length > 0 &&
      recommendation.length > 0
    ) {

     // recent submited data
     console.log(this.state);

      //empty form input 
      this.rref.reset();
      this.setState({
        ...initialState,
        isAgreed: true
      });

    }
  };

  render() {
    const { errors } = this.state;
    return (
      <React.Fragment>
        {!this.state.isAgreed &&
        <div>
          <header className="header margin-medium">
            <h1 className="margin-small">
              1815 Rose Gold Chronograph Watch - Brown Croco Strap
            </h1>
            <h2 className="margin-small">Review</h2>
          </header>
          <div className="main-container">
            <form onSubmit={this.handleSubmit} ref={(ref) => (this.rref = ref)}>
              <div className="container">
                <div className="form-group margin-medium">
                  <div>
                    <span
                      className={
                        (this.state.errors.rating.length > 0 ? "empty-field" : "")
                      }
                    >
                      Your Rating
                    </span>
                    <br />
                    <Rating
                      name="rating"
                      className="stars"
                      size="large"
                      value={this.state.rating}
                      onChange={this.handleChange}
                    />
                  </div>
                  {errors.rating.length > 0 && (
                    <span className="error">{errors.rating}</span>
                  )}
                </div>

                <div className="form-group margin-medium">
                  <div className="input-field">
                    <input
                      type="text"
                      name="title"
                      value={this.state.title}
                      onChange={this.handleChange}
                      className={
                        "form-control " +
                        (this.state.errors.title.length > 0 ? "empty-field" : "")
                      }
                      id="title"
                      placeholder="Summary of your experience"
                      onBlur={this.handleValidation}
                    />
                    <label htmlFor="title">Review Title</label>
                  </div>
                  {errors.title.length > 0 && (
                    <span className="error">{errors.title}</span>
                  )}
                </div>

                <div className="form-group margin-medium">
                  <div className="input-field">
                    <textarea
                      name="review"
                      onChange={this.handleChange}
                      value={this.state.review}
                      className={
                        "form-control " +
                        (this.state.errors.review.length > 0 ? "empty-field" : "")
                      }
                      id="review"
                      placeholder="Give us some details about what you liked and disliked about the product"
                      rows="3"
                      onBlur={this.handleValidation}
                    >
                    </textarea>
                    <label htmlFor="review">Your Review</label>
                  </div>
                  {errors.review.length > 0 && (
                    <span className="error">{errors.review}</span>
                  )}
                </div>

                <div className="radio-group">
                  <p
                    className={
                      "margin-small " +
                      (this.state.errors.recommendation.length > 0
                        ? "empty-field"
                        : ""
                      )
                    }
                  >
                    Would you recommend this product?
                  </p>
                  <div>
                    <input
                      type="radio"
                      id="yes"
                      name="recommendation"
                      onChange={this.handleChange}
                      value="yes"
                    />
                    <label htmlFor="yes" className="radioButtonLabel">
                      <span>YES</span>
                    </label>

                    <input
                      type="radio"
                      id="no"
                      name="recommendation"
                      onChange={this.handleChange}
                      value="no"
                    />
                    <label htmlFor="no" className="radioButtonLabel no">
                      <span>NO</span>
                    </label>
                  </div>
                  {errors.recommendation.length > 0 && (
                    <span className="error">{errors.recommendation}</span>
                  )}
                </div>

              </div>
              <footer>
                <div className="terms margin-small">
                  <span>By continuing you agree to our </span>
                  <a href="https://www.okendo.io/end-user-terms/" rel="noopener noreferrer" target="_blank">
                    <span>Terms and Conditions </span>
                    <i className="fa fa-external-link" aria-hidden="true"></i>
                  </a>
                  <span>, and </span>
                  <a href="https://www.okendo.io/privacy-policy/" rel="noopener noreferrer" target="_blank">
                    <span>Privacy Policy </span>
                    <i className="fa fa-external-link" aria-hidden="true"></i>
                  </a>
                </div>

                <div className="submit">
                  <button className="btn agree">Agree & Continue</button>
                </div>
              </footer>
            </form>
          </div>
        </div>
        }
        {this.state.isAgreed && <Ratings/>}
      </React.Fragment>
    );
  }
}
export default Review;
