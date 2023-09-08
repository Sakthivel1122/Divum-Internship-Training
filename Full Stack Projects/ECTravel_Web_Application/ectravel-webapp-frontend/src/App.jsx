import React from 'react';
import './App.css';
import Home from './components/Home';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Service from './components/Service';
import About from './components/About';
import Profile from './components/Profile';

const router = createBrowserRouter([
  {
    path:"/",
    element: <Home/>
  },
  {
    path:"/services",
    element: <Service/>
  },
  {
    path:"/about",
    element: <About/>
  },
  {
    path:"/profile",
    element: <Profile/>
  },
])
const App = () => {
  return(
    <div className='App'>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
