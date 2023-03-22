import React from 'react'
import './Panier.css'
const Panier = (porps) => {

  let valeur  = porps.porsprix1
  
   console.log(valeur)
  function vider (){
        if (valeur !== 0) {
          valeur = 0
        }

      console.log(valeur);
  }

console.log(porps)
  return (
    <div className='panier-container'>
        <p className='para1'>panier1</p>


            {
              <p> {valeur}</p>
            }
           
        <button onClick={vider}>vider le panier</button>
    </div>
  )
}

export default Panier
