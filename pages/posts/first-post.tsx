import Link from 'next/link';
import React, {useCallback} from 'react';

export default function FirstPost () {

  const clickMe = useCallback(() => {
    console.log('you click')
  }, [])

  return (
    <div>
      <button onClick={clickMe}>
        clickMe
      </button>
      <hr/>
      <Link href={'/'}>回到首页</Link>

    </div>
  )
}