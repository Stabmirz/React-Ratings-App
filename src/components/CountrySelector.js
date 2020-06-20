
import React, { Component } from 'react';
import { CountryDropdown} from 'react-country-region-selector';


class CountrySelector extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    let {country} = this.props;
    return (
      <div>
        <CountryDropdown
          value={country}
          defaultOptionLabel="Australia"
          onChange={(val) => this.props.changeHandler(val)} />
      </div>
    );
  }
}

export default CountrySelector;