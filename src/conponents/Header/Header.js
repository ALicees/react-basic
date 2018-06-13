import React  from 'react';
import classes from '../Header/Header.css';

const Myheader = (props) =>{
    const assignedClassed = [];
    if(props.persons.length <= 2){
        assignedClassed.push(classes.red);
    }
    if(props.persons.length <= 1){
        assignedClassed.push(classes.bold);
    }
    if(props.shoePersons){
        style.backgroundColor = 'yellow'
    }
    const style={
        backgroundColor:'pink',
        border:'1px dashed red'
    }
    return(
        <div>
            <h1>Hi,EveryBody</h1> 
            <p className={assignedClassed.join(' ')}> Hi, React App </p> 
            <button style={style} onClick = { props.clicked} > 切换 </button> 
        </div>
    )
}

export default Myheader;