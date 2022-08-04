import Button from '../shared/Button'
import { FaFacebookF } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { BiVideo } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='ftop'>
        <div className='fleft' data-aos='fade-right'>
          <h4>About the company</h4>
          <div className='line'></div>
          <p>
            Buildmax Limited is a professional building, renovation and
            refurbishment company. We are part of the Nairobi-based Talisman
            Capital Group.
          </p>
        </div>
        <div className='fmid'>
          <h4>Newsletter</h4>
          <p>Stay updated with our lates offers</p>
          <input type='email' placeholder='your.address@email.com' />
          <Button
            btnName='Subscribe'
            type='submit'
            pad='10px 100px'
            fntSize='16px'
          />
        </div>
        <div className='fright' data-aos='fade-left'>
          <h4>Follow us</h4>
          <ul>
            <li>
              <FaFacebookF className='social' size={25} />
              Buildmax-Ltd
            </li>
            <li>
              <BsTwitter className='social' size={25} />
              buildmax_ke
            </li>
            <li>
              <BsInstagram className='social' size={25} />
              buildmax_ltd
            </li>
            <li>
              <BiVideo className='social' size={25} />
              Buildmax Limited
            </li>
          </ul>
        </div>
      </div>
      <div className='fbot'>
        © BUildMax Limited | ALL Rights Reserved | 2019
        <ul className='navBar bot'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
          <li>
            <Link to='/services'>Services</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
