import React, { Component } from 'react';
import Text from './Text';
import CountrySelector from './CountrySelector';
import "./Rating.css";

const initialState = {
    quality: "",
    design:"",
    experience: "",
    productStandouts:"",
    age:"",
    reason:"",
    country:"",
    errors: {
        quality: "",
        design:"",
        experience: "",
        age:"",
        reason:"",
    },
};

class Ratings extends Component {
    constructor() {
        super();
        this.state = {
          ...initialState,
        };
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        let errors = this.state.errors;
        errors[name]="";
        console.log(this.state);
        this.setState({
            [name]: value,
        });
    };

    changeHandler = (val) => {
        this.setState({
           country: val,
        });
        console.log(this.state);
    };

    
    handleSubmit = (event) => {
        event.preventDefault();
    
        let {quality,design,experience,age,reason} = this.state;
        let errors = this.state.errors;
        
        // check if any required field is left empty and show error message

        errors.quality = quality.length===0 ? "Please select a rating!" : "";
        errors.design = design.length===0 ? "Please select a rating!" : "";
        errors.experience = experience.length===0 ? "Please select a rating!" : "";
        errors.age = age.length===0 ? "Please select an answer!" : "";
        errors.reason = reason.length===0 ? "Please select an answer!" : "";
    
        this.setState({
          errors,
        });
    
        // submit the form after checking the form validation
        if (
            quality.length > 0 &&
            design.length > 0 &&
            experience.length > 0 &&
            age.length > 0 &&
            reason.length > 0 
        ) 
        {
    
         // recent submited data
         console.log(this.state);
        
        // saving data in an object 
        const ratingsData = {
            quality: this.state.quality,
            design:this.state.design,
            experience:this.state.experience,
            productStandouts:this.state.productStandouts,
            age:this.state.age,
            reason:this.state.reason,
            country:this.state.country
        }
      
          console.log(ratingsData);
        
          // call api to add data in the database
        //   axios.post('http://api/add', ratingsData)
        //     .then(res => console.log(res.data));
      
        
          //empty form input 
          this.rref.reset();
          this.setState({
            ...initialState,
          });
    
        }
      };

    render() { 
        const { errors } = this.state;
        return ( 
            <React.Fragment>
                <header className="header margin-medium">
                    <h1 className="margin-small">
                        1815 Rose Gold Chronograph Watch - Brown Croco Strap
                    </h1>
                    <h2 className="margin-small">Ratings</h2>
                </header>
                <div className="main-container">
                    <form onSubmit={this.handleSubmit} ref={(ref) => (this.rref = ref)}>
                        <div className="container">
                            <div className="rating-container margin-medium">
                                <span className={(this.state.errors.quality.length > 0 ? "empty-field" : "")}>Quality</span>
                                <div className="rating">
                                    <fieldset>
                                        <input type="radio" onChange={this.handleChange} id="q5" name="quality" value="5" />
                                        <label htmlFor="q5" title="Outstanding">5</label>
                                        <div className="hr-line"></div>

                                        <input type="radio" onChange={this.handleChange} id="q4" name="quality" value="4" />
                                        <label htmlFor="q4" title="Very Good">4</label>
                                        <div className="hr-line"></div>

                                        <input type="radio" onChange={this.handleChange} id="q3" name="quality" value="3" />
                                        <label htmlFor="q3" title="Good">3</label>
                                        <div className="hr-line"></div>

                                        <input type="radio" onChange={this.handleChange} id="q2" name="quality" value="2" />
                                        <label htmlFor="q2" title="Poor">2</label>
                                        <div className="hr-line"></div>
                                        
                                        <input type="radio" onChange={this.handleChange} id="q1" name="quality" value="1" />
                                        <label htmlFor="q1" title="Very Poor">1</label>
                                    </fieldset>
                                </div>
                                <Text/>
                                {errors.quality.length > 0 && (<span className="error">{errors.quality}</span>)}
                            </div>
                            <div className="rating-container margin-medium">
                                <span className={(this.state.errors.design.length > 0 ? "empty-field" : "")}>Design</span>
                                <div className="rating">
                                    <fieldset>
                                        <input type="radio" onChange={this.handleChange} id="d5" name="design" value="5" />
                                        <label htmlFor="d5" title="Outstanding">5</label>
                                        <div className="hr-line"></div>

                                        <input type="radio" onChange={this.handleChange} id="d4" name="design" value="4" />
                                        <label htmlFor="d4" title="Very Good">4</label>
                                        <div className="hr-line"></div>

                                        <input type="radio" onChange={this.handleChange} id="d3" name="design" value="3" />
                                        <label htmlFor="d3" title="Good">3</label>
                                        <div className="hr-line"></div>

                                        <input type="radio" onChange={this.handleChange} id="d2" name="design" value="2" />
                                        <label htmlFor="d2" title="Poor">2</label>
                                        <div className="hr-line"></div>

                                        <input type="radio" onChange={this.handleChange} id="d1" name="design" value="1" />
                                        <label htmlFor="d1" title="Very Poor">1</label>
                                    </fieldset>
                                </div>
                                <Text/>
                                {errors.design.length > 0 && (<span className="error">{errors.design}</span>)}
                            </div>

                            <div className="rating-container margin-large">
                                <span className={(this.state.errors.experience.length > 0 ? "empty-field" : "")}>Experience</span>
                                <div className="rating">
                                    <fieldset>
                                        <input type="radio" onChange={this.handleChange} id="e5" name="experience" value="5" />
                                        <label htmlFor="e5" title="Outstanding">5</label>
                                        <div className="hr-line"></div>

                                        <input type="radio" onChange={this.handleChange} id="e4" name="experience" value="4" />
                                        <label htmlFor="e4" title="Very Good">4</label>
                                        <div className="hr-line"></div>

                                        <input type="radio" onChange={this.handleChange} id="e3" name="experience" value="3" />
                                        <label htmlFor="e3" title="Good">3</label>
                                        <div className="hr-line"></div>

                                        <input type="radio" onChange={this.handleChange} id="e2" name="experience" value="2" />
                                        <label htmlFor="e2" title="Poor">2</label>
                                        <div className="hr-line"></div>

                                        <input type="radio" onChange={this.handleChange} id="e1" name="experience" value="1" />
                                        <label htmlFor="e1" title="Very Poor">1</label>
                                    </fieldset>
                                </div>
                                <Text/>
                                {errors.experience.length > 0 && (<span className="error">{errors.experience}</span>)}
                            </div>
                            <div className="product margin-large">
                                <span>Product Standouts</span>
                                <span className="margin-small">Choose up to 5 that best apply (optional)</span>
                                <div className="product-rating">
                                    <input type="radio" onChange={this.handleChange} id="accurate-timekeeping"name="productStandouts" value="Accurate Timekeeping" />
                                    <label htmlFor="accurate-timekeeping" className="productRatingLabel">Accurate Timekeeping</label>

                                    <input type="radio" onChange={this.handleChange} id="high-quality" name="productStandouts" value="High Quality" />
                                    <label htmlFor="high-quality" className="productRatingLabel">High Quality</label>

                                    <input type="radio" onChange={this.handleChange} id="durable"name="productStandouts" value="Durable" />
                                    <label htmlFor="durable" className="productRatingLabel">Durable</label>

                                    <input type="radio" onChange={this.handleChange} id="elegant"name="productStandouts" value="Elegant"/>
                                    <label htmlFor="elegant" className="productRatingLabel">Elegant</label>

                                    <input type="radio" onChange={this.handleChange} id="good-weight"name="productStandouts" value="Good Weight" />
                                    <label htmlFor="good-weight" className="productRatingLabel">Good Weight</label>

                                    <input type="radio" onChange={this.handleChange} id="versatile"name="productStandouts" value="Versatile" />
                                    <label htmlFor="versatile" className="productRatingLabel">Versatile</label>

                                    <input type="radio" onChange={this.handleChange} id="looks-expensive"name="productStandouts" value="Looks Expensive" />
                                    <label htmlFor="looks-expensive" className="productRatingLabel">Looks Expensive</label>

                                    <input type="radio" onChange={this.handleChange} id="attracts-compliments"name="productStandouts" value="Attracts Compliments" />
                                    <label htmlFor="attracts-compliments" className="productRatingLabel">Attracts Compliments</label>

                                    <input type="radio" onChange={this.handleChange} id="unique"name="productStandouts" value="Unique" />
                                    <label htmlFor="unique" className="productRatingLabel">Unique</label>

                                    <input type="radio" onChange={this.handleChange} id="great-gift"name="productStandouts" value="Great Gift" />
                                    <label htmlFor="great-gift" className="productRatingLabel">Great Gift</label>

                                    <input type="radio" onChange={this.handleChange} id="great-value"name="productStandouts" value="Great Value" />
                                    <label htmlFor="great-value" className="productRatingLabel">Great Value</label>
                                </div>

                            </div>
                            
                            <div className="about margin-small">
                                <span style={{fontWeight:"600"}} className="margin-small">About You</span>
                                <span className={(this.state.errors.age.length > 0 ? "empty-field" : "")}>Age range</span>
                                <span className="margin-small">Choose <strong>one</strong></span>
                                <div className="age-groups">
                                    <input type="radio" onChange={this.handleChange} id="ageGroup1" name="age" value="Under 18" />
                                    <label htmlFor="ageGroup1" className="ageGroupLabel">Under 18</label>

                                    <input type="radio" onChange={this.handleChange} id="ageGroup2" name="age" value="18 - 24" />
                                    <label htmlFor="ageGroup2" className="ageGroupLabel">18 - 24</label>

                                    <input type="radio" onChange={this.handleChange} id="ageGroup3" name="age" value="25 - 34" />
                                    <label htmlFor="ageGroup3" className="ageGroupLabel">25 - 34</label>

                                    <input type="radio" onChange={this.handleChange} id="ageGroup4" name="age" value="35 - 44"/>
                                    <label htmlFor="ageGroup4" className="ageGroupLabel">35 - 44</label>

                                    <input type="radio" onChange={this.handleChange} id="ageGroup5" name="age" value="45 - 54" />
                                    <label htmlFor="ageGroup5" className="ageGroupLabel">45 - 54</label>

                                    <input type="radio" onChange={this.handleChange} id="ageGroup6" name="age" value="55 - 64" />
                                    <label htmlFor="ageGroup6" className="ageGroupLabel">55 - 64</label>

                                    <input type="radio" onChange={this.handleChange} id="ageGroup7" name="age" value=" 65+" />
                                    <label htmlFor="ageGroup7" className="ageGroupLabel"> 65+</label>
                                </div>
                                {errors.age.length > 0 && (<span className="error">{errors.age}</span>)}

                            </div>
                            <div className="boughtFor margin-small">
                                <span className={(this.state.errors.reason.length > 0 ? "empty-field" : "")}>Bought For</span>
                                <span className="margin-small">Choose <strong>one</strong></span>
                                <div className="buying-reasons">
                                    <input type="radio" onChange={this.handleChange} id="buyingReason1" name="reason" value="Personal Use" />
                                    <label htmlFor="buyingReason1" className="buyingReasonLabel">Personal Use</label>

                                    <input type="radio" onChange={this.handleChange} id="buyingReason2" name="reason" value="Gift" />
                                    <label htmlFor="buyingReason2" className="buyingReasonLabel">Gift</label>
                                </div>
                                {errors.reason.length > 0 && (<span className="error">{errors.reason}</span>)}
                            </div>

                            <span className="margin-small">Country</span>
                            <CountrySelector country={this.state.country} changeHandler= {this.changeHandler}/>
                        </div>

                        <footer className="next">  
                            <div className="submit">
                            <button className="btn agree">Next</button>
                            </div>
                        </footer>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Ratings;