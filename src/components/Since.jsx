import { Link } from 'react-router-dom'

const Since = () => {
  return (
    <div className='since'>
      <div className='sleft'>
        <h2>Since we Started work in 1900</h2>
        <Link to='/quality' className='orange'>
          <div className='line'></div>
          <span className='lineright'>Quality design at the fairest price</span>
        </Link>
      </div>
      <svg
        width='59'
        height='204'
        viewBox='0 0 59 204'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className='patt2'
      >
        <g clip-path='url(#clip0_1_603)'>
          <path
            d='M0 11.5157C0 5.15726 5.13772 0 11.4721 0C17.8065 0 22.9442 5.15726 22.9442 11.5157C22.9442 17.8742 17.8105 23.0315 11.4721 23.0315C5.13373 23.0315 0 17.8782 0 11.5157Z'
            fill='#F1F6F9'
          />
          <path
            d='M47.5279 23.0315C53.8638 23.0315 59 17.8757 59 11.5157C59 5.15577 53.8638 0 47.5279 0C41.192 0 36.0558 5.15577 36.0558 11.5157C36.0558 17.8757 41.192 23.0315 47.5279 23.0315Z'
            fill='#F1F6F9'
          />
          <path
            d='M0 47.7086C0 41.3501 5.13772 36.1929 11.4721 36.1929C17.8065 36.1929 22.9442 41.3501 22.9442 47.7086C22.9442 54.0671 17.8065 59.2244 11.4721 59.2244C5.13772 59.2244 0 54.0711 0 47.7086Z'
            fill='#F1F6F9'
          />
          <path
            d='M47.5279 59.2244C53.8638 59.2244 59 54.0686 59 47.7086C59 41.3486 53.8638 36.1929 47.5279 36.1929C41.192 36.1929 36.0558 41.3486 36.0558 47.7086C36.0558 54.0686 41.192 59.2244 47.5279 59.2244Z'
            fill='#F1F6F9'
          />
          <path
            d='M0 83.9055C0 77.547 5.13772 72.3898 11.4721 72.3898C17.8065 72.3898 22.9442 77.547 22.9442 83.9055C22.9442 90.264 17.8065 95.4212 11.4721 95.4212C5.13772 95.4212 0 90.264 0 83.9055Z'
            fill='#F1F6F9'
          />
          <path
            d='M47.5279 95.4212C53.8638 95.4212 59 90.2655 59 83.9055C59 77.5455 53.8638 72.3898 47.5279 72.3898C41.192 72.3898 36.0558 77.5455 36.0558 83.9055C36.0558 90.2655 41.192 95.4212 47.5279 95.4212Z'
            fill='#F1F6F9'
          />
          <path
            d='M0 120.099C0 113.74 5.13772 108.583 11.4721 108.583C17.8065 108.583 22.9442 113.74 22.9442 120.099C22.9442 126.457 17.8065 131.614 11.4721 131.614C5.13772 131.614 0 126.457 0 120.099Z'
            fill='#F1F6F9'
          />
          <path
            d='M47.5279 131.614C53.8638 131.614 59 126.458 59 120.099C59 113.739 53.8638 108.583 47.5279 108.583C41.192 108.583 36.0558 113.739 36.0558 120.099C36.0558 126.458 41.192 131.614 47.5279 131.614Z'
            fill='#F1F6F9'
          />
          <path
            d='M0 156.291C0 149.933 5.13772 144.776 11.4721 144.776C17.8065 144.776 22.9442 149.933 22.9442 156.291C22.9442 162.65 17.8065 167.807 11.4721 167.807C5.13772 167.807 0 162.65 0 156.291Z'
            fill='#F1F6F9'
          />
          <path
            d='M47.5279 167.807C53.8638 167.807 59 162.651 59 156.291C59 149.931 53.8638 144.776 47.5279 144.776C41.192 144.776 36.0558 149.931 36.0558 156.291C36.0558 162.651 41.192 167.807 47.5279 167.807Z'
            fill='#F1F6F9'
          />
          <path
            d='M0 192.484C0 186.126 5.13772 180.969 11.4721 180.969C17.8065 180.969 22.9442 186.126 22.9442 192.484C22.9442 198.843 17.8065 204 11.4721 204C5.13772 204 0 198.847 0 192.484Z'
            fill='#F1F6F9'
          />
          <path
            d='M47.5279 204C53.8638 204 59 198.844 59 192.484C59 186.124 53.8638 180.969 47.5279 180.969C41.192 180.969 36.0558 186.124 36.0558 192.484C36.0558 198.844 41.192 204 47.5279 204Z'
            fill='#F1F6F9'
          />
        </g>
        <defs>
          <clipPath id='clip0_1_603'>
            <rect width='59' height='204' fill='white' />
          </clipPath>
        </defs>
      </svg>

      <div className='sright'>
        <p>
          We have worked on some of the stunning architectural marvels within
          industries like hotels, residential buildings, offices, commercial
          buildings, food & beverage and made them great successes.
        </p>
        <p>
          We have worked on some of the stunning architectural marvels within
          industries like hotels, residential buildings, offices, commercial
          buildings, food & beverage and made them great successes.
        </p>
        <Link
          to='/lorem'
          className='orange
        '
        >
          lorem ipsum
        </Link>
      </div>
    </div>
  )
}

export default Since
