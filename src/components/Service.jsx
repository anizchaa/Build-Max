import React from 'react'

const Service = ({ svg, name, description }) => {
  return (
    <div className='service'>
      {svg}
      <h4>{name}</h4>
      <p>{description}</p>
    </div>
  )
}

export default Service
