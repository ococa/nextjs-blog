import styles from '../styles/Home.module.css'
import {GetServerSideProps, NextPage} from "next";
import {getDatabaseConnection} from "../src/utils";

type Props = {
  browser: string,
  post: string
}
const Home: NextPage<Props> = (props) => {
  return (
    <div className={styles.container}>
      { props?.post }
    </div>
  )
}

export default Home;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const connection = await getDatabaseConnection();
  console.log('connection')
  const a = await connection.manager.find('users');
  return Promise.resolve({
    props: {
      browser: '123123',
      post: JSON.stringify(a)
    }
  })
}
