import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css'
import FirstPost from "./posts/first-post";
import {GetServerSideProps, NextPage} from "next";
import {Connection, createConnection} from "typeorm";
import {User} from "../src/entity/User";
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
  // const connection = await createConnection();
  // console.log(connection);
  // const a = await connection.manager.find('users');
  // console.log(a);
  // await connection.close();
  // console.log('hhhh1')
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
