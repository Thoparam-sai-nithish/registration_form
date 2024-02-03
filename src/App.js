import './App.css'
import React from 'react'
import {createBrowserRouter,RouterProvider} from  'react-router-dom';
import Home from './home/Home';
import Login from './login/Login';
function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Login/>,
    },
    {
      path:'/Home',
      element:<Home/>
    }
  ])
  return (
  <div className='App'>
    <RouterProvider router={router}/>
  </div>
  );
}

export default App;
