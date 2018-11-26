import React from 'react';
import './Header.css'

// 无状态组件
const MyHeader = (props)=>{
    // 样式 复合样式使用驼峰命名
    const style = {
        backgroundColor: 'green',
        color: '#fff',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
    }
    // 样式 class类名
    const assignedClasses = [];

    if(props.showPersons){
        style.backgroundColor = 'red'
    }
    if(props.persons.length <= 2){
        assignedClasses.push('red');  //class=["red"]
    }
    if(props.persons.length <= 1){
        assignedClasses.push('bold');  //class=["red","bold"]
    }

    return (
        <div>
            <h1>{props.appTitle}</h1>
            <p className={assignedClasses.join(' ')}>Hi,React App!</p>
            <button style={style} onClick={props.clicked}>内容切换</button>
        </div>
    )
}

export default MyHeader;