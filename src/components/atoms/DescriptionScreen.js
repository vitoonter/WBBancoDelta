import React, {PropTypes} from 'react';

const DescriptionScreen = (text) =>
  <div>
    {this.props.text}
  </div>

DescriptionScreen.propTypes = {
  text: PropTypes.string.isRequired,
};

export default DescriptionScreen;
