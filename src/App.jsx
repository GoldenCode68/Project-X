import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Screen/Layout'
import Landing from './Screen/Landing/Landing'
import Profile from './Screen/Profile/Profile'

function App() {

  const myRouter = createBrowserRouter([
    {
      path:'',
      element:<Layout/>,
      children:[
        {
          path:'',
          element:<Landing/>
        },
        {
          path:'/Profile/:id',
          element:<Profile/>
        }
      ]
    }
  ])  

  return (
    <>
      <RouterProvider router={myRouter}/>
    </>
  )
}

export default App
