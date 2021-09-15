import {navbar} from '../styles/Navbar.module.css'
import A from './A'

export default function Navbar() {
  return (
    <ul className={navbar}>
        <li>
          <A href={'/'} text="Home"/>
        </li>
        <li>
          <A href={'/users'} text="Users"/>
        </li>
    </ul>
  )
}
