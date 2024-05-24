import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'

const BlogLayout = ({ children }) => {
  const { logOut, isAuthenticated, currentUser } = useAuth()

  return (
    <>
      <Toaster />
      <header className="relative flex justify-between items-center py-4 px-4 lg:px-8 bg-blue-700 text-white">
        <h1 className="lg:text-2xl font-semibold tracking-tight">
          <Link
            className=" hover:text-blue-100 transition duration-100"
            to={routes.home()}
          >
            Redwood Blog
          </Link>
        </h1>
        <nav>
          <ul className="relative flex items-center font-light gap-4">
            <li>
              <Link
                className="py-2 px-4 hover:bg-blue-600 transition duration-100 rounded"
                to={routes.about()}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="py-2 px-4 hover:bg-blue-600 transition duration-100 rounded"
                to={routes.contact()}
              >
                Contact
              </Link>
            </li>
            <li>
              {isAuthenticated ? (
                <div className='flex items-center gap-4'>
                  <p className='text-sm'>{currentUser.email}</p>
                  <button type="button" onClick={logOut} className="text-sm py-2 px-4 bg-red-500 text-white rounded">
                    Logout
                  </button>
                </div>
              ) : (
                <Link to={routes.login()} className="text-sm py-2 px-4 bg-orange-500 text-white rounded">
                  Login
                </Link>
              )}
            </li>
          </ul>

        </nav>
      </header>
      <main className="lg:max-w-4xl mx-auto p-6 lg:p-12 bg-white shadow rounded-b mt-6 lg:mt-12">
        {children}
      </main>
    </>
  )
}

export default BlogLayout