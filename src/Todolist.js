import React, { Component,Fragment } from 'react';
import './Todolist.css';
import TodoItem from './todoItem';
class Todolist extends Component {
  constructor(props) {
    super(props);
    // 当组件的state或者props值发生改变的时候，reader函授就会重新执行
    // 当父组件的reader函数被执行时子组件的reader函数也会被重新运行一次
    this.state={
      inputValue:'',
      list:[]
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleDel = this.handleDel.bind(this)
  }
  render() {
    // jsx => React.creatElement => 虚拟dom（js对象） => 真实dom
    //底层：jsx通过creatElement方法将jsx语法转成js对象
    // console.log(3333)
    return (<Fragment>
      {/* 普通的注释 */}
      {
        //单行的注释
      }
      <div>
        <label htmlFor='inputId'>输入内容：</label>
        {/* 迫不得已再使用ref */}
        <input type="text" value={this.state.inputValue} className='input'
        onChange={this.handleInputChange}
        id='inputId' ref={(input)=>{this.input=input}}/>
        <button onClick={this.handleBtnClick}>提交</button>
      </div>
      <ul>
        {this.getTodoItem()}
      </ul>
      </Fragment>)
  }
  getTodoItem() {
    return this.state.list.map((item, index) =>
      // return 出来的注释和代码在一个包裹层里面
      // <li key={index} onClick={this.handleDel.bind(this,index)}
      // dangerouslySetInnerHTML = {{ __html: item }}></li>
      <
      TodoItem key = { index } content = { item } index = { index } handleDel = { this.handleDel }
      />
    )
  }
  handleInputChange(e) {
    // console.log(e.target,111)
    // console.log(this.input,222)
    const value = e.target.value
    // es6语法，箭头函数紧跟{}表示函数体需要return，不紧跟{}，是return的简写，不需要写return，返回的就是=>后面的东西
    this.setState(()=>(
      {
        inputValue: value
      }
    ))
    // this.setState(()=> {
    //   return {
    //     inputValue: e.target.value
    //   }
    // })
    // this.setState({
    //   inputValue: e.target.value
    // })
  }
  handleBtnClick(e) {
    // setState是个异步函数
    this.setState((prevState)=>(
      {
        list: [...prevState.list, prevState.inputValue],
        inputValue: ''
      }
    ),()=>{
      console.log(this.state.list,666)
    })
    // 用来验证setState是个异步函数
    // console.log(this.state.list, 555)
    
    // setState老的写法
    // this.setState({
    //   list:[...this.state.list,this.state.inputValue],
    //   inputValue:''
    // })
  }
  handleDel(index) {
    this.setState((prevState)=>{
      const list = [...prevState.list]
      list.splice(index, 1)
      return {list}
    })
    // // immutable 
    // const list = [...this.state.list]
    // list.splice(index,1)
    // this.setState({
    //   list: list
    // })
  }
 }
 export default Todolist;
