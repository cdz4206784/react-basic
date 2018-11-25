import React from 'react';
import './Person.css'

const person = ( props )=>{
    // console.log(props)
    return (
        <div className="Person">
            <p onClick={props.deleted}>大家好，我是{props.name}！我已经拥有{props.count}个作品</p>
            {/* <p>{props.children}</p> */}
            <input type="text" onChange={props.changed} defaultValue={props.name} />
        </div>
    )
}

export default person;