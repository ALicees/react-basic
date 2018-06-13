import React ,{Component} from 'react';
import Person from  '../Persons/Person/Person';
//无状态组件 转为 有状态组件
{/*const persons = (props) => {
    return props.persons.map((person,index) => {
        return <Person 
                myClick={()=> props.clicked(index)}
                name={person.name}
                count={person.count}
                key={person.id}
                changed={(event)=>props.changed(event,person.id)}
        />
    })
}*/}

class Persons extends Component{
    componentWillMount(){
        console.log("[App.js]  componentWillMount is running ... ")
    }
    componentDidMount(){
        console.log("[App.js]  componentDidMount is running ... ")
    }
    switchNameHandler = (newName) => {
        this.setState({
            persons: [
                { name: newName, count: 33 },
                { name: 1, count: 50 },
            ]
        })  
    }
    render(){
        return this.props.persons.map((person,index) =>{
            return <Person 
                        myClick={()=> this.props.clicked(index)}
                        name={person.name}
                        count={person.count}
                        key={person.id}
                        changed={(event)=>this.props.changed(event,person.id)}
            />
        })
    }
}


export default Persons;