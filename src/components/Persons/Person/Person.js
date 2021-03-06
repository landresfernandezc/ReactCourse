import React  from 'react';
//import './Person.css';
import styled from 'styled-components';
///Arrow function
///import Radium,{StyleRoot} from 'radium';
import classes from './Person.css'
// const StyleDiv=styled.div`
// width: 60%;
// margin: 16px auto;
// border: 1px solid #eee;
// box-shadow: 0 2px 3px #ccc;
// padding: 16px;
// text-align: center;
// @media(min-width:500px){
//     width: 450px;
// }`;
const person= (props) =>{
    //This is dinamically code with {dinamically}
    //Children property
   /*const style={
       '@media(min-width:500px)':{
           width:'450px'
       }
//    }*/
//    const random=Math.random();
//         if(random>0.7){
//             throw new Error('Something went wrong')
//         }
    return (
        //<div className="Person" style={style}>  
        
        <div className={classes.Person}>
            <p onClick={props.click}> Im a {props.name} and I am {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}></input>
        </div>
        //</div>
    )
};
export default person;
//export default Radium(person);