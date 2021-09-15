import MainLayout from '../../components/MainLayout'
import style from '../../styles/UserPage.module.scss'
import Head from 'next/head'

export default function UserPage({user}) {

  return (
    <MainLayout>
      <Head>
        <title>{user.name}</title>
      </Head>

      <div className={style.user}>
        <h1>
          user {user.name}
        </h1> 
      </div>
    </MainLayout>
  )
}

export async function getServerSideProps({query}) {
  const response = await  fetch('https://jsonplaceholder.typicode.com/users/' + query.uid)
  const user = await response.json()

  return {
    props: {
      user
    }
  }
}
