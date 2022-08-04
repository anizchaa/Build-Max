import ServicesData from '../data/ServicesData'
import Service from './Service'

const Services = () => {
  const services = ServicesData
  return (
    <>
      <h3>We Provide Below Services.</h3>
      <div className='services'>
        {services.map((service) => {
          return (
            <Service
              key={service.id}
              svg={service.svg}
              name={service.name}
              description={service.description}
            />
          )
        })}
      </div>
    </>
  )
}

export default Services
