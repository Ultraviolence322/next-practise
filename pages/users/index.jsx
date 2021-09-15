import A from '../../components/A'
import MainLayout from '../../components/MainLayout'

function Users({users}) {
  return (
    <MainLayout>
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
    </MainLayout>
  )
}

export async function getStaticProps(context) {
  const response = await  fetch('https://jsonplaceholder.typicode.com/users')
  const users = await response.json()

  return {
    props: {
      users
    }
  }
}

export default Users