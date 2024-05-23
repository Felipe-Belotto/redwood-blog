import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import ArticlesCell from 'src/components/ArticlesCell'

const MyPagePage = () => {
  return (
    <>
      <Metadata title="MyPage" description="MyPage page" />

      <h1>Hello World</h1>

      <ArticlesCell />


    </>
  )
}

export default MyPagePage
