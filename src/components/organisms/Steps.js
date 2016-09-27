import React, {PropTypes} from 'react';

const borderIconColor = (color) => {
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

const borderLineColor = (color) => {
  switch(color){
    case 'is-current-step':
      return 'is-border-current-icon';
    case 'is-future-step':
      return 'is-border-future-icon';
    case 'is-finished-step':
      return 'is-border-finished-icon';
    default:
      return '';
  }
}

const iconColor = (color) => {
  return `${color}  ${borderIconColor(color)}`;
}

const iconsImages = ["fa-file-text", "fa-unlock-alt", "fa-check"];

const Steps = ({colors, currentStep, steps}) => {
  return (
    <div className="l-center icons-box icons-position">
      {colors.map(function(color, index){
        if(index < colors.length-1){
          return <span>
                  <i className={`fa ${iconsImages[index]} icon-header icon icon-border ${iconColor(color)}` } aria-hidden="true"></i>
                  <span className={`icons--line-betweeen ${borderLineColor(color)}` }>__</span>
                </span>;
        } else{
          return <span>
                  <i className={`fa ${iconsImages[index]} icon-header icon icon-border ${iconColor(color)}` } aria-hidden="true"></i>
                </span>;
        }
      })}
    </div>
  );
}

Steps.propTypes = {
  colors: PropTypes.arrayOf(React.PropTypes.string)
};

export default Steps;
