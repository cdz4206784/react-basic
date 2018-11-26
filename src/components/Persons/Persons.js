import React, { Component } from "react";
import Person from './Person/Person'

//有状态组件 方法
class Persons extends Component{
    // 生命周期钩子方法
    constructor(props){
        super(props);
        console.log("[Persons.js] constructor is running...");
    }

    componentWillMount(){
        console.log("[Persons.js] componentWillMount is running...");
    }

    componentDidMount(){
        console.log("[Persons.js] componentDidMount is running...");
    }

    // 更新组件生命周期钩子函数
    componentWillReceiveProps(nextProps){
        console.log("[UPDATE Persons.js] componentWillReceiveProps is running...",nextProps);
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log("[UPDATE Persons.js] shouldComponentUpdate is running...",nextProps,nextState);
        return nextProps.persons !== this.props.persons;
    }

    componentWillUpdate(nextProps,nextState){
        console.log("[UPDATE Persons.js] componentWillUpdate is running...",nextProps,nextState);
    }

    componentDidUpdate(prevProps,prevState){
        console.log("[UPDATE Persons.js] componentDidUpdate is running...",prevProps,prevState);
    }

    render(){
        console.log("[Persons.js] componentDidMount is running...");
        return this.props.persons.map((person,index)=>{
            return <Person 
            name={person.name} 
            count={person.count} 
            key={person.id} 
            deleted={()=>this.props.clicked(index)} 
            changed={(event)=>this.props.changed(event,person.id)} />
        })
    }
}


export default Persons;