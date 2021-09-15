import { useRouter } from "next/dist/client/router"
import style from '../../styles/UserPage.module.scss'

export default function UserPage() {
  const routetInfo = useRouter()
  console.log('routetInfo', routetInfo);
  return (
    <div className={style.user}>
      <h1>
        user {routetInfo.query.uid}
      </h1> 
    </div>
  )
}
