import { useState } from 'react'
import Navbar from '../../components/Navbar'
import A from '../../components/A'

function Users() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'vlad',
    },
    {
      id: 2,
      name: 'lisa',
    }
  ])

  return (
    <div>
      <Navbar />
      <h1>Users</h1>
      <ul>
        {
          users.map(u => {
            return <li key={u.id}>
              <A href={`/users/${u.id}`} text={u.name}/>
            </li>
          })
        }
      </ul>
    </div>
  )
}

export default Users