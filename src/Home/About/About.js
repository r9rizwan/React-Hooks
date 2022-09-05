
import {useState} from "react";
import { Link } from "react-router-dom";

const About = ()=>{

    const[state, setState] = useState({})
    const updateState = (e)=>{

        state[e.target.id] = e.target.value;
    }

    const getdata = ()=>{
        console.log(state)

    }
    return (

        <div>
            Name <input onChange={updateState} id = "Name"/>
        <button onClick={getdata}>getdata</button>
        </div>
    )
}

export default About;