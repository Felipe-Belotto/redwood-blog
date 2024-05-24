import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const AboutPage = () => {
  return (
    <>
      <Metadata title="About" description="About page" />

      <section className='w-full flex flex-col gap-4'>
    <h3 className='text-2xl font-bold text-zinc-600'>About us</h3>
    <p>RedWood was born from a simple yet powerful idea: to make technological knowledge accessible to everyone. We believe that technology has the power to transform lives and shape the future, but for this to happen fairly and equally, information needs to be democratized.</p>

    <p>In this spirit, we are dedicated to translating the complex world of technology into clear, concise and engaging content. Whether you are a beginner looking for guidance to take your first steps in this universe or an experienced professional looking for insights and news, RedWood is the place for you. Join us on this journey of learning and discovery! </p>
</section>
    </>
  )
}

export default AboutPage
