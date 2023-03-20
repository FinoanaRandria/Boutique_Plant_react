import React from 'react'
import CardPlante from '../Card/Card'
import Panier from '../Panier/Panier'
import '../page/Body.css'
const body = () => {
  return (
    <div className='body-container'>
          <div className='container-panier'>
               <Panier/>
                

          </div>
          <div className='container-card'>
            
               <CardPlante/>
            </div>        
    </div>
  )
}

export default body
