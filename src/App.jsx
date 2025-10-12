import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from './component/Homepage'
import About from './component/About';

import './App.css'
import Navbar from './component/Navbar';
import Contact from './component/Contact'
import Projects from './component/Projects';

const router = createBrowserRouter([
    {
    path: "/",
    element:<>
        <Navbar />
        <Homepage/>
      </>
   
  },
  {
    path:"/about",
    element:<>
      <Navbar />
      <About/>
    </>
  },
  {
    path:"/contact",
    element:<>
        <Navbar />
        <Contact/>
        </>
  },
  {
    path:"/project",
    element:<>
      <Navbar />
      <Projects/>
    </>
  }
  
  ])
function App() {
  
  return (
    <>
         <RouterProvider router={router} />

    </>
   
    
  );
}

export default App
