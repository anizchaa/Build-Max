import { Link } from 'react-router-dom'
import Button from '../shared/Button'
import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { ImCross } from 'react-icons/im'

const NavBar = () => {
  const [active, setActive] = useState(false)
  return (
    <>
      <div className='forHam'></div>
      <ul className={active ? 'navBar active' : 'navBar'}>
        <ImCross
          className='crossham'
          size={20}
          onClick={() => setActive(false)}
        />
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
        <li>
          <Link to='/quote'>
            <Button btnName='Get A Quote' pad='6px 10px 8px' fntSize='16px' />
          </Link>
        </li>
      </ul>

      <GiHamburgerMenu
        className='hamburger'
        size={30}
        onClick={() => setActive(true)}
      />
    </>
  )
}

export default NavBar
