import React, { Component } from 'react';
import './App.css';
import MyHeader from '../components/Header/Header';
import Persons from '../components/Persons/Persons';


//有状态组件 类 可使用state
class App extends Component {
  // 生命周期钩子方法
  constructor(props){
    super(props);
    console.log("[App.js] constructor is running...",props);
    /*
    * state: 用于改变组件内容状态的值（动态）
    * props: 用于组件通信进行传值
    */
    this.state = {
      persons:[
        {id:1,name:'米斯特吴',count:50},
        {id:2,name:'HENRY',count:5},
        {id:3,name:'Hemiah',count:15}
      ]
    }
  }

  componentWillMount(){
    console.log("[App.js] componentWillMount is running...");
  }

  componentDidMount(){
    console.log("[App.js] componentDidMount is running...");
  }


  // 是否显示
  togglePersonsHandler = ()=>{
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }

  // 删除 通过唯一值对数组进行操作，再更新状态
  deletePersonHandler = (personIndex)=>{
    // const persons = this.state.persons;
    const persons = [...this.state.persons];  //取到原数组
    persons.splice(personIndex,1);  //删除
    // setState更新
    this.setState({
      persons:persons
    })
  }

  // 双向数据绑定-更改
  nameChangedHandler=(event,id)=>{
    // 通过id找到对应对象数据的下标
    const personIndex = this.state.persons.findIndex(p=>{
      return p.id === id;
    })
    // 通过下标，从数组中取得对象数据
    const person = {
      ...this.state.persons[personIndex]
    }
    // 更改对象中的属性name
    person.name = event.target.value;

    const persons = [...this.state.persons];  // 取到原数组
    persons[personIndex] = person;  // 改变数据
    // setState更新
    this.setState({
      persons:persons
    })
  }

  render() {
    console.log("[App.js] render is running...");

    let persons = null;
    if(this.state.showPersons){
      persons = <Persons 
      persons={this.state.persons} 
      clicked={this.deletePersonHandler} 
      changed={this.nameChangedHandler} />
    }
    return (
      <div className="App">
        <MyHeader 
        appTitle={this.props.title} 
        persons={this.state.persons} 
        showPersons={this.state.showPersons}
        clicked={this.togglePersonsHandler} />
        { persons }
      </div>
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hello world'));

  }
}

export default App;
