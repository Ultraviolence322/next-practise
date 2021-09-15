import { useRouter } from "next/dist/client/router"
import style from '../../styles/UserPage.module.scss'
import Head from 'next/head'

export default function UserPage() {
  const routetInfo = useRouter()
  console.log('routetInfo', routetInfo);
  return (
      <Head>
        <title>{user.name}</title>
      </Head>
    <div className={style.user}>
      <h1>
        user {routetInfo.query.uid}
      </h1> 
    </div>
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
