import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
class todoItem extends Component {
  constructor(props) {
    super(props);
    this.handleDel = this.handleDel.bind(this)
  }
  render() {
    // 当父组件的reader函数被执行时子组件的reader函数也会被重新运行一次
    // console.log(4444)
    const {content,test} = this.props;
    return ( 
      <Fragment> 
        <li onClick={this.handleDel}>{test}-{content}</li>
      </Fragment>
    )
  }
  handleDel() {
    const {handleDel,index} = this.props;
    handleDel(index);
  }
}
todoItem.propTypes = {
  test:PropTypes.string.isRequired,
  content: PropTypes.string,
  handleDel: PropTypes.func,
  index: PropTypes.number
}
todoItem.defaultProps ={
  test:'hello'
}
export default todoItem;
