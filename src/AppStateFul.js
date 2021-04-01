import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';
const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Kate", age: "19" },
      { name: "Andres", age: "24" },
      { name: "Melany", age: "15" }
    ],
    otherState:"OtherValue"
  })//Hooks
  const [otherState,setOtherState]=useState('Some other value')
  console.log(personsState,otherState)

  
  const switchNameHandler = (newName) => {
    //Property to set State in the DOM
    setPersonsState({
      persons: [
        { name: newName, age: "15" },
        { name: "Andres", age: "16" },
        { name: "Kate", age: "17" }
      ],
      personsState:personsState.otherState
    })
  }
  const nameChangeHandler = (event) => {
    //Property to set State in the DOM
    setPersonsState({
      persons: [
        { name: 'Melany', age: "15" },
        { name: event.target.value, age: "16" },
        { name: "Kate", age: "17" }
      ],
      personsState:personsState.otherState
    })
  }
  //State property
  return (
    <div className="App">
      <div>Hi my name is Andres</div>
      <p>This is really working</p>
      <button onClick={()=>switchNameHandler('Melany!!')}>Switch Name</button>
      <Person 
            name={personsState.persons[0].name} 
            age={personsState.persons[0].age}
             />
      <Person 
            name={personsState.persons[1].name} 
            age={personsState.persons[1].age}
            > My hobbies: Stay at home</Person>
      <Person 
            name={personsState.persons[2].name} 
            age={personsState.persons[2].age}
            click={()=>switchNameHandler('Andres12')}
            changed={()=>this.nameChangeHandler} />
    </div>
  );
  //return React.createElement('div',{className:App},React.createElement('h1',null,'Hi, Im a React App'))

}
export default app;

  

