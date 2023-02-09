
import './App.css'
import NavBar from './components/NabBar'
// import { Routes, Route } from 'react-router-dom'
import Home from './screens/Home'
import Blog from './screens/Blog'
import Products from './screens/Products'
//import LoginForm from './screens/LoginForm'

// import About from './screens/About'
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Mls from './screens/Mls'
import { News } from './screens/News'
import NewsMore from './screens/NewsMore'
import Community from './screens/Communities'
import Communities from './screens/Communities'
import ViewCard from './components/ViewCard'


  
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/mls",
    element: <Mls />,
  },
  // news
  {
    path: "/news",
    element: <News />,
  },
  {
    path: "/readmore",
    element: <NewsMore />
  },
 /* {
    path: "/login",
    element: <LoginForm />
  },*/
  {
    path: "/communities",
    element: <Communities />
  },
  {
    path: "/view",
    element: <ViewCard/>
  },

]);

function App() {
  return (


    <RouterProvider router={router}>
     
  
      
    </RouterProvider> 

  )
}
 


export default App
