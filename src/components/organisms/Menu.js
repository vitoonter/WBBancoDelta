import React, { Component } from 'react';
import MenuImage from '../atoms/MenuImage'

//Get from API
const ContentMenuComponent = () => (
  <span></span>
)

class Menu extends Component{
  constructor(props) {
    super(props);
    this.state = {
      NavVisible: false
    };
  }

  renderMenuBar() {
    if(this.state.NavVisible) {
      return  <ContentMenuComponent />;
    }
  }

  handleMenuClick() {
    if(!this.state.NavVisible) {
      this.setState({NavVisible: true});
    } else {
      this.setState({NavVisible: false});
    }
  }

  render(){
    return (
      <span>
        <a className="menu-image" onClick={() => this.handleMenuClick()}>
          <MenuImage />
        </a>
        {this.renderMenuBar()}
      </span>
    )
  }
}

export default Menu;
