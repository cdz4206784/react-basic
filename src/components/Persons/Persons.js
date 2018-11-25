import React from "react";
import Person from './Person/Person'

//无状态组件 方法
const persons = (props)=>{
    // console.log(props)
    return props.persons.map((person,index)=>{
        return <Person 
        name={person.name} 
        count={person.count} 
        key={person.id} 
        deleted={()=>props.clicked(index)} 
        changed={(event)=>props.changed(event,person.id)} />
    })
}

export default persons;