import imgtop from '../images/image2.jpg'
import imgbot from '../images/image3.jpg'
import Button from '../shared/Button'

const Aesthetic = () => {
  return (
    <div className='aesthetic'>
      <div className='atop'>
        <img src={imgtop} height='500' width='650' alt='interior design' />
        <div className='aright'>
          <h2>Aesthetically pleasing.</h2>
          <p>
            We have worked on some of the stunning architectural marvels within
            industries like hotels, residential buildings, offices, commercial
            buildings, food & beverage and made them great successes.
          </p>
          <Button btnName='Learn More' pad='10px 65px' />
        </div>
      </div>
      <div className='abot'>
        <div className='aleft'>
          <h2>Great work Ethic.</h2>
          <p>
            We have worked on some of the stunning architectural marvels within
            industries like hotels, residential buildings, offices, commercial
            buildings, food & beverage and made them great successes.
          </p>
          <Button btnName='Learn More' pad='10px 65px' />
        </div>
        <img src={imgbot} height='500' width='650' alt='interior design' />
      </div>
    </div>
  )
}

export default Aesthetic
