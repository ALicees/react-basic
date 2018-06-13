import React,{Component} from 'react';
import '../container/App.css';
import Persons from '../conponents/Persons/Persons';
import Myheader from '../conponents/Header/Header';
//有状态的组件
class App extends Component {
    constructor(props){
        super(props);
        console.log("[App.js] constuctor is running...",props);
        this.state = {
            persons: [
                { id: 1, name: "1", count: 1 },
                { id: 2, name: "2", count: 2 },
                { id: 3, name: "3", count: 2 }
            ],
            otherState: "anything",
            showPersons: false
        }
    }
    componentWillMount(){
        console.log("[App.js]  componentWillMount is running ... ")
    }
    componentDidMount(){
        console.log("[App.js]  componentDidMount is running ... ")
    }
    //更新生命钩子构造函数
    componentWillReceiveProps(nextProps){
        console.log("[Update Person.js ] componentWillReciveProps is Running .. ",nextProps);
    }
    // shouldComponentUpdate(nextProps,nextState){
    //     console.log("[Update Person.js ] shouldComponentUpdate is Running .. ",nextProps,nextState);
    //     return nextProps.persons !== this.props.persons;
    // }
    
    switchNameHandler = (newName) => {
        this.setState({
            persons: [
                { name: newName, count: 33 },
                { name: 1, count: 50 },
            ]
        })  
    }
    ChangeNameHandler = (event, id) => {
        //拿到index
        const personIndex = this.state.persons.findIndex(p => {
                return p.id === id;
            })
            //
        const person = {
                ...this.state.persons[personIndex]
            }
        //将要修改的内容赋值并修改
        person.name = event.target.value;
        console.log(event);
        //拿到所有的数组
        const persons = [...this.state.persons];
        //赋值已经修改的值  
        persons[personIndex] = person;

        //对状态进行修改
        this.setState({
            persons: persons
        })
    }
    togglePersonHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({
            showPersons: !doesShow
        })
    }
    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];    
        persons.splice(personIndex, 1)
        this.setState({
            persons: persons        
        })
    }
    render() {
        console.log("[App.js]  render is running ... ")
        const style = {
            font: 'inherit',
            border:'1px solid #ddd'
        };
        let persons = null;
        if (this.state.showPersons) {
            persons = <Persons 
                        clicked={this.deletePersonHandler}
                        persons={this.state.persons} 
                        changed={this.ChangeNameHandler}
                        />
        }
        
        return ( 
            <div className="App">
                <Myheader 
                    persons={this.state.persons}
                    showPersons={this.state.showPersons}
                    clicked={this.togglePersonHandler}
                />
                {persons}
            </div>
        )
    }
}

export default App;