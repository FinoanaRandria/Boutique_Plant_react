import React ,{useState} from 'react';

const CardPlante = (props) => {

   console.log(props)
  
    const Miklique = () =>{
      props.porpsSetprix(props.propsprix+props.prix)
       
      }
    return (
        <div>
            <div key={props.id} className="plant">
            <img className="plant-img" src={props.photo} width={100} alt="plante" />
            <p> {props.nom} </p>
         
            <p> {props.prix} Ar</p>
            
            <button onClick={Miklique}>Ajouter</button>

          </div>
        </div>
    );
}

export default CardPlante;
