import { Link, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'

const BlogLayout = ({ children }) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()

  function logOutHome(){
    logOut()
    window.reload(true)
  }
  return (
    <>
      <header className='w-full bg-purple-900 text-white' >
        <div className="w-full flex justify-between py-4 px-8">
          <h1 className='text-2xl'>
            <Link to={routes.home()}>Redwood Blog</Link>
          </h1>
          <nav>
          <ul className='flex gap-4'>
            <li>
              <Link to={routes.home()}>Home</Link>
            </li>
            <li>
              <Link to={routes.contact()}>Contact</Link>
            </li>
          </ul>
        </nav>
          {isAuthenticated ? (
            <div className="flex-between">

              <button type="button" onClick={logOut}>
                Logout
              </button>
            </div>
          ) : (
            <Link to={routes.login()}>Login</Link>
          )}
        </div>
      </header>
      <main className='w-full flex justify-center'>{children}</main>
    </>
  )
}

export default BlogLayout