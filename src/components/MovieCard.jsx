import React from 'react'

// eslint-disable-next-line react/prop-types
const MovieCard = ({movie:{id,title,overview,poster_path,vote_average,release_date}}) => {
  return (
    
    <div className='move-card' key={id}>
        <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
        <h3 className='text-white text-4xl font-bold p-2'>{title}</h3>
        <p className='text-white text-sm'>{overview}</p>
        <div className='flex justify-between'>
            <button className='bg-yellow-400 text-black p-2 rounded-lg hover:cursor-pointer m-1'>Add to Favorites</button>
            <button className='bg-red-400 text-white p-2 rounded-lg hover:cursor-pointer m-1'>Remove from Favorites</button>
        </div>
        <div className='content'>
        <img src="star.svg"  />
        <p>Rating: {vote_average}</p>
        <p>Release Date: {release_date}</p>
        </div>

    </div>
       
  )
}

export default MovieCard