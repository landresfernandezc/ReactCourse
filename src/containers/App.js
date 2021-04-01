import React, { Component } from 'react';
import { render } from 'react-dom';
//mport styled from 'styled-components';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import Cockpit from '../components/Cockpit/Cockpit';
//import Radium,{StyleRoot} from 'radium';
/*
const StyleButton=styled.button`
  background-color: ${ props=> props.alt ? 'red':'green'};
  color:white;
  font:inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor:'pointer';
  &:hover {
    background-color:  ${ props=> props.alt ? 'salmon':'lightgreen'};
    color:black
  }
`*/
class App extends Component {
    state = {
        persons: [
            { name: 'Melany', age: "15", id: 'adawda' },
            { name: 'Andres', age: "16", id: 'dawdsss' }, //event.target.value
            { name: "Kate", age: "17", id: 'ssasdadad' }
        ],
        otherState: 'Other state',
        showPersons: false
    }



    nameChangeHandler = (event, id) => {
        //Property to set State in the DOM
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        }); //Function that find element by id and returned the index array
        const person = {
            ...this.state.persons[personIndex]
        }; //This is more modern than assign
        //const person =Object.assign({},this.state.persons[personIndex])
        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = person;
        this.setState({
            persons: persons
        })
    }
    deletePersonHandler = (personIndex) => {
        //const persons=this.state.persons;
        const persons = [...this.state.persons] //Spread operator 
        persons.splice(personIndex, 1);
        this.setState({ persons: persons })
    }
    togglePersonsHandler = () => {
            const doesShow = this.state.showPersons;
            this.setState({ showPersons: !doesShow })
        }
        //State property
    render() {
        /*const style={
          backgroundColor:'green',
          color:'white',
          font:'inherit',
          border: '1px solid blue',
          padding: '8px',
          cursor:'pointer',
          ':hover':{
            backgroundColor:'green',
            color:'black'
          }
        }*/

        let persons = null;
        if (this.state.showPersons) {
            persons = <Persons persons = { this.state.persons }
                clicked = { this.deletePersonHandler }
                changed = { this.nameChangeHandler }
                /> 
            /*style.backgroundColor='red';
            style[':hover']= {
              backgroundColor:'lightblue',
              color:'black'
            }*/
            // btnClass.push(classes.Red)
        }
       
        return (
            //  <StyleRoot>
            <div className = { classes.App } > 
            <Cockpit 
                title={this.props.appTitle}
                showPersons={this.state.showPersons}
                persons={this.state.persons}
                clicked={this.togglePersonsHandler}
            />
                { persons } 
            </div>
            //  </StyleRoot>

        );
    }

    //return React.createElement('div',{className:App},React.createElement('h1',null,'Hi, Im a React App'))

}
export default App;
//export default Radium(App);//highter order Component