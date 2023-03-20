import React from 'react';

const CardPlante = (props) => {
    const Miklique = () =>{
        console.log(props.id)
      }
    return (
        <div>
            <div key={props.id} className="plant">
            <img className="plant-img" src={props.photo} width={100} alt="plante" />
            <p> {props.nom}</p>
            <p> {props.prix} Ar</p>
            
            <button onClick={Miklique}>Ajouter</button>

          </div>
        </div>
    );
}

export default CardPlante;
