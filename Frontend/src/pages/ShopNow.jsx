import React from 'react'
import Mens from '../categories/Mens'
import Womens from '../categories/Womens'
import Shoes from '../categories/Shoes'
import shopnow from '../assets/shopnow.jpg'

function ShopNow() {
  return (
   <div className='bg-primary'>
 <div>
<img src={shopnow} alt=""  className='sm:h-[80vh] w-[99.9vw] h-[50vh]'/>
    </div>
      <Mens/>
      <Womens/>
      <Shoes/>
   </div>

    
  )
}

export default ShopNow
