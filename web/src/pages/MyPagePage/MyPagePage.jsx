import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import ArticlesCell from 'src/components/ArticlesCell'

const MyPagePage = () => {
  return (
    <>
      <Metadata title="MyPage" description="MyPage page" />

      <section className='w-full flex justify-center lg:p-8'>
      <ArticlesCell />

      </section>



    </>
  )
}

export default MyPagePage
