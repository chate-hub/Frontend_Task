import React from 'react'
import useFetch from '../hooks/usefetch'
import { Link } from 'react-router-dom'

export default function Homepage() {
  const { loading, error, data } = useFetch('http://localhost:1337/restaurants')

  if (loading) return <p>Loading</p>

  if (!Array.isArray(data)) {
    return <p>No data to display</p>
  }
  
  return (
    <div>
      {data.map((restaurant) => (
        <div key={restaurant.id} className='restaurant-card'>
        <div className='rating'>{restaurant.rating}</div>
        <h2>{restaurant.name}</h2>

        <small>Restaurant List</small>

        <p>{restaurant.body}</p>
        <Link to={'/ratings/${restaurant.id}'}>Read more</Link>
      </div>
      ))}
    </div>
  )
  
}



