import { watch } from 'fs'
import React from 'react'
import Image from 'next/image'

const Watches = () => {

    const watchData=[
        {id:1 , name:'Rolex', price:1200 , description:'luxury watch', image:'/images/watch-1.jpg'},
        {id:2 , name:'Omega', price:8000 , description:'Sporty Design', image:'/images/watch-2.jpg'},
        {id:3 , name:'Patek Phillipee', price:25000 , description:'Elephant timepiece', image:'/images/watch-3.jpg'},
        {id:4 , name:'TAG Heuer', price:5000 , description:'Sporty and stylish', image:'/images/watch-4.jpg'},
        {id:5 , name:'Breitling', price:7000 , description:'Bold and rugged', image:'/images/watch-5.jpg'},
        {id:6 , name:'Seiko', price:1000 , description:'Affordable and reliable', image:'/images/watch-6.jpg'},
    ]
  return (
    <div>
        <div className='watches'>
            {watchData.map((watch)=>(
                <div key={watch.id} className='watch-card'>
                <Image src={watch.image} alt={watch.name} width={500} height={400}/>
                <h3>{watch.name}</h3>
                <p >{watch.description}</p>
                <div className='price'>${watch.price}</div>
                <button>Addd to Cart</button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Watches