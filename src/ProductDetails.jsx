import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { NavLink } from "react-router-dom";


function ProductDetails() {
  const params = useParams()
  let [myDetails, setMyDetails] = useState(null)

  async function handelDetails() {
    const res = await fetch(`https://dummyjson.com/recipes/${params.id}`);
    const details = await res.json();
    setMyDetails(details)
  }

  useEffect(() => {
    handelDetails()
  })

  return (
    <div className='text-amber-50 m-5 flex  justify-center mt-[8rem] '>
      {myDetails ? (
        <div className='flex   justify-center items-center gap-5 '>
          <img src={myDetails.image} alt={myDetails.name} className='my-5 w-[20rem]' />
          <div className='flex flex-col gap-1'>
            <h1 className=' text-4xl'>{myDetails.name}</h1>

            <p className='flex font-bold text-2xl'>Ingredients: </p>
            {myDetails.ingredients.map((ing, i) => (
              <div> <p key={i} className='flex  '>{ing}</p></div>
            ))}
            <NavLink to={`/products`} className={"px-3 py-1 bg-green-700 mt-3  rounded w-31  font-medium "}> Back to menu</NavLink>

          </div>
        </div>
      ) : (<p>Loading...</p>)}
    </div>
  )
}

export default ProductDetails
