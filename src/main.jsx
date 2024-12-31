import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import LoginPage from './components/LoginPage.jsx'
import Signup from './components/Signup.jsx'

import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home.jsx'
const router  = createBrowserRouter([
{

      path : "/",
      element : <LoginPage />


},{

    path : "/Signup",
    element : <Signup />

},{

      path : "/Home",
      element :<Home />


}


])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider  router ={router}/>
  </StrictMode>,
)
