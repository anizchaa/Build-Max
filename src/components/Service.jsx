const Service = ({ svg, name, description, direction }) => {
  return (
    <div className='service' data-aos={direction}>
      {svg}
      <h4>{name}</h4>
      <p>{description}</p>
    </div>
  )
}

export default Service
