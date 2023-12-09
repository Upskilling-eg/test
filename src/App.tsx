import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AuthLayout from './Layouts/AuthLayout';
import MasterLayout from './Layouts/MasterLayout';

function App() {
  const role = 'admin';
  const routes = createBrowserRouter([
    {
      path:'/',
      element:<AuthLayout />,
      children:[
        {
          path:'',
          element:<h1>login</h1>
        },
        {
          path:'login',
          element:<h1>login</h1>
        }
      ]
    },
    {
      path: '/',
      element:<MasterLayout/>,
      children:[
        {
          path:'dashboard',
          element:<h1>dashboardddddddd</h1>
        }
      ]
    },
    
  
])
  return (
    <RouterProvider router={routes}/>
  )
}

export default App
