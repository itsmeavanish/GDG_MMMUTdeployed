import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Team from './Pages/Team.jsx'
import Signup from './Pages/Signup'
import Events from './Pages/Events'
import Registration from './Components/Registration'
import Contact from './Pages/Contact'
import Blogs from './Pages/Blogs'
// import Profile from './Profile'

///yha par is function mai sare routes ha jo ek array of object mai save h...
const router = createBrowserRouter([
  {
    path: '/GDG_MMMUTdeployed/',
    element: <Home />
  },
  {
    path: '/GDG_MMMUTdeployed/team',
    element: <Team />
  },
  {
    path: '/GDG_MMMUTdeployed/signup',
    element: <Signup/>
  },
  {
path:'/GDG_MMMUTdeployed/events',
element:<Events/>
  },
  {
    path:'/GDG_MMMUTdeployed/blogs',
    element:<Blogs />
  },
  {
    path:'/GDG_MMMUTdeployed/contact',
    element:<Contact/>,
  },

  {
    path:'/GDG_MMMUTdeployed/registration',
    element:<Registration/>
  }
  // {
  //   path: '/add-listing',
  //   element: <AddListing />
  // },
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
          <RouterProvider router={router} />
  </StrictMode>,
)
