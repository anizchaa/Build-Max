import { Link } from 'react-router-dom'
import Grids from './Grids'
import GridImageData from '../data/GridImageData'

const Gallery = () => {
  const gimages = GridImageData

  return (
    <div className='gallery'>
      <h3>Gallery</h3>
      <div className='gtop'>
        <Link to='/quality' className='orange'>
          <div className='line'></div>
          <span className='lineright'>Quality design at the fairest price</span>
        </Link>
        <p>
          Lorem ipsum dolor sit amet consect etur adipiscing elit sed do eiusmo.
          There are many variations.
        </p>
      </div>
      <div className='gridImages'>
        {gimages.map((g) => {
          return <Grids key={g.id} url={g.url} />
        })}
      </div>
    </div>
  )
}

export default Gallery