import React from 'react';
import Travels from './components/Travels'


const Travel = (props) =>{
 return(
      <div>
        je vais à {props.destination} qui est à {props.distance} dans ce beau pays qui est {props.country}.
        <img 
          alt = {props.destination}
          src = {props.landscape}>
        </img>
      </div>)

}

export default Travel