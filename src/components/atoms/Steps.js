import React, {PropTypes} from 'react';

const borderColor = (color) => {
  switch(color){
    case 'is-current-step':
      return 'is-border-current-icon';
    // this case is for trasference 1 page
    case 'is-future-step':
      return 'is-border-current-icon';
    case 'is-finished-step':
      return 'is-border-finished-icon';
    default:
      return '';
  }
}

const iconColor = (color) => {
  return `${color}  ${borderColor(color)}`;
}


const Steps = () => {
  return (
    <div className="text-align-center positionIcons">
      <i className={"fa fa-file-text icon-header icon icon-border " + iconColor(this.props.colorStep1) } aria-hidden="true"></i>
      <span className={"icons--line-betweeen " + this.props.color1 }>__</span>
      <i className={"fa fa-unlock-alt icon-header icon icon-border " + iconColor(this.props.colorStep2) } aria-hidden="true"></i>
      <span className={"icons--line-betweeen " + this.props.color2 }>__</span>
      <i className={"fa fa-check icon-header icon icon-border " + iconColor(this.props.colorStep3) } aria-hidden="true"></i>
    </div>
  );
}

Steps.propTypes = {
  colorStep1: PropTypes.string.isRequired,
  colorStep2: PropTypes.string.isRequired,
  colorStep3: PropTypes.string.isRequired
};

export default Steps;
