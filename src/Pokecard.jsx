import React from "react";


function Pokecard(props) {

    return (
        <div className="pokecard--pokemon">
            <h1>{props.name}</h1>
            <img src={props.image} alt={props.alt} />
            <h2>Type: {props.type}</h2>
            <h2>EXP: {props.exp}</h2>
        </div>
    );
};

export default Pokecard;