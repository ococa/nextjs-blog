import {GetServerSideProps, NextPage} from "next";
import UAParser from "ua-parser-js";

type Props = {
  browser: string
}
const SsrDemo: NextPage<Props> = (props) => {
  const { browser} = props;
  return (
    <div>
      <h1>你的浏览器是</h1>
      <div>{browser}</div>
    </div>
  )
}

export default SsrDemo;
export const getServerSideProps: GetServerSideProps = (ctx) => {
  const ua = ctx.req.headers['user-agent'];
  const result = new UAParser(ua).getResult();
  console.log('result', result)
  return Promise.resolve({
    props: {
      browser: result.browser.name
    }
  })
}