
import './App.css';
import NavBar from './components/NabBar';
// import { Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import Blog from './screens/Blog';
import Products from './screens/Products';
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Mls from './screens/Mls';
import { News } from './screens/News';
import NewsMore from './screens/NewsMore';
import Community from './screens/Communities';
import Communities from './screens/Communities';
import ViewCard from './components/ViewCard';
import Admin from './screens/Admin';


  
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/dashboard",
    element: <Admin />,
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
 
  {
    path: "/communities",
    element: <Communities />
  },
  {
    path: "/view",
    element: <ViewCard/>
  },
  // {
  //   path: "/login",
  //   element: <CreatForm open={open} onClick={()=> setOpen(true)}/>
  // },

]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
 


export default App
