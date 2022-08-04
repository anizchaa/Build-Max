import { Link } from 'react-router-dom'
import Button from '../shared/Button'

const NavBar = () => {
  return (
    <>
      <ul className='navBar'>
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
    </>
  )
}

export default NavBar
