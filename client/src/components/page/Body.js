import {React,useState}from 'react'
import CardPlante from '../Card/CardPlante'
import Panier from '../Panier/Panier'
import '../page/Body.css'
const Body = ({data},) => {

/* console.log(data) */
const [prix ,setprix] = useState(0)

function reset0 (){
   
    const prix0 =  setprix(0)

}

const [Plant , setPlant] = useState(data);

  return (
    <div className='body-container'>
          <div className='container-panier'>
               <Panier
                  
                  porsprix1 = {prix} 
               />
                

          </div>
          <div className='container-card'>
               <button onClick={reset0}>reset</button>
            <div className="plant-content">
               {
                  Plant.map((elmt) => (
                    <CardPlante 
                    porpsSetprix = {setprix}
                    propsprix={prix}
                    key={elmt.id}
                     
                    nom ={elmt.nom}

                    prix= {elmt.prix}

                    photo={elmt.photo}
                    />
                  ))
                 }
            </div>
                
               
            </div>        
    </div>
  )
}

export default Body
